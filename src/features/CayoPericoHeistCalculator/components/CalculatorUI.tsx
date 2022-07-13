import { primaryTargetOptions, secondaryCardOptions } from "../defines"
import classNames from "classnames"
import {
  SecondaryTargets,
  SecondaryTargetKeys,
  PrimaryTargetKeys,
  BreakdownValues,
} from "../types"
import numeral from "numeral"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "~/icons/Chevron"

interface Props {
  selectedPrimaryTarget: string
  secondaryTargets: SecondaryTargets
  totalTake: number
  crewRequired: number
  hardMode: boolean
  eliteChallenge: boolean
  hiddenSafe: boolean
  breakdownValues: BreakdownValues
  setHiddenSafe: (newValue: boolean) => void
  setEliteChallenge: (newValue: boolean) => void
  setHardMode: (hardMode: boolean) => void
  setSelectedPrimaryTarget: (newValue: PrimaryTargetKeys) => void
  increaseAmount: (key: SecondaryTargetKeys) => void
  decreaseAmount: (key: SecondaryTargetKeys) => void
}

export const CalculatorUI: React.FC<Props> = ({
  totalTake = 0,
  crewRequired = 0,
  hardMode = false,
  eliteChallenge = false,
  hiddenSafe = false,
  setHiddenSafe,
  setEliteChallenge,
  setHardMode,
  selectedPrimaryTarget,
  secondaryTargets,
  setSelectedPrimaryTarget,
  increaseAmount,
  decreaseAmount,
  breakdownValues,
}) => {
  const [showExpandedView, setShowExpandedView] = useState<boolean>(false)

  const renderTakeWindow = () => (
    <div className="border m-2 p-4 flex flex-col">
      <div className="flex flex-row items-center justify-start lg:justify-between w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full">
          <p className="text-xl font-bold">
            Total Take: ${numeral(totalTake ?? 0).format("0,0")}
          </p>
          <span className="flex flex-row items-center">
            <p className="text-xl font-bold mr-4">
              Required Crew: {crewRequired ?? 0}
            </p>
          </span>
        </div>
        <button onClick={() => setShowExpandedView(prev => !prev)}>
          {showExpandedView ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {showExpandedView && (
        <div className="pt-4">
          <table>
            <tr>
              <td className="w-48">Primary Target</td>
              <td className="text-green-700">{`$ ${numeral(
                breakdownValues.primaryTarget
              ).format("0,0")}`}</td>
            </tr>
            <tr>
              <td>Secondary Targets</td>
              <td className="text-green-700">{`$ ${numeral(
                breakdownValues.secondaryTarget
              ).format("0,0")}`}</td>
            </tr>
            <tr>
              <td>Elite Challenge</td>
              <td className="text-green-700">{`$ ${numeral(
                breakdownValues.eliteChallenge
              ).format("0,0")}`}</td>
            </tr>
            <tr>
              <td>Hidden Safe</td>
              <td className="text-green-700">{`$ ${numeral(
                breakdownValues.hiddenSafe
              ).format("0,0")}`}</td>
            </tr>
            <tr>
              <td>Pavel Fee</td>
              <td className="text-red-700">{`$ ${numeral(
                breakdownValues.pavelFee
              ).format("0,0")}`}</td>
            </tr>
            <tr>
              <td>Fencing Fee</td>
              <td className="text-red-700">{`$ ${numeral(
                breakdownValues.fencingFee
              ).format("0,0")}`}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  )

  return (
    <>
      <h1 className="text-2xl font-bold text-center py-4">
        Cayo Perico Payout Calculator
      </h1>
      <p className="text-center">
        If you play GTA Online then you know that Cayo Perico is the best way of
        making money in the game. There are currently 5 primary targets and 5
        secondary targets that you can take. Each target pays out something
        different and figuring out what you are going to make on a heist before
        you do it requires spreadsheets and math. This calculator attempts to
        make this process a little less painful.
      </p>
      <hr className="my-6" />
      {renderTakeWindow()}
      <div className="py-4 grid grid-cols-1 lg:grid-cols-2">
        <label>
          <input
            defaultChecked={hardMode}
            checked={hardMode}
            type="checkbox"
            onChange={() => setHardMode(!hardMode)}
          />
          <span className="pl-2 font-bold text-zinc-700">Hard Mode</span>
        </label>
        <label>
          <input
            defaultChecked={eliteChallenge}
            checked={eliteChallenge}
            type="checkbox"
            onChange={() => setEliteChallenge(!eliteChallenge)}
          />
          <span className="pl-2 font-bold text-zinc-700">
            Elite Challenge ($50k Per Player)
          </span>
        </label>
        <label>
          <input
            defaultChecked={hiddenSafe}
            checked={hiddenSafe}
            type="checkbox"
            onChange={() => setHiddenSafe(!hiddenSafe)}
          />
          <span className="pl-2 font-bold text-zinc-700">Hidden Safe</span>
        </label>
      </div>
      <h2 className="pb-2 text-lg font-bold text-zinc-700">Primary Targets</h2>
      <div className="grid grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 gap-4">
        {primaryTargetOptions.map(opt => {
          const isActive = opt.value === selectedPrimaryTarget
          const cardClasses = classNames("border", "p-4", "ring-blue-500", {
            "ring-2": isActive,
          })
          return (
            <div
              className={cardClasses}
              key={opt.value}
              onClick={() => setSelectedPrimaryTarget(opt.value)}
            >
              <p className="text-sm font-bold">{opt.label}</p>
            </div>
          )
        })}
      </div>
      <h2 className="mt-4 pb-2 text-lg font-bold text-zinc-700">
        Secondary Targets
      </h2>
      <div className="grid grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 gap-4">
        {secondaryCardOptions.map(opt => {
          return (
            <div
              key={opt.value}
              className="flex flex-row lg:flex-col items-center justify-between px-4 border p-4 lg:my-0"
            >
              <p className="text-sm font-bold">{opt.label}</p>
              <div className="flex flex-row items-center gap-4 lg:pt-4">
                <button
                  onClick={() =>
                    decreaseAmount(opt.value as SecondaryTargetKeys)
                  }
                  className="border h-12 w-12"
                >
                  -
                </button>
                <p>{secondaryTargets[opt.value as SecondaryTargetKeys]}</p>
                <button
                  onClick={() =>
                    increaseAmount(opt.value as SecondaryTargetKeys)
                  }
                  className="border h-12 w-12"
                >
                  +
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
