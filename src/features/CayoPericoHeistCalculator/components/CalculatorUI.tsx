import { primaryTargetOptions, secondaryCardOptions } from "../defines"
import classNames from "classnames"
import {
  SecondaryTargets,
  SecondaryTargetKeys,
  PrimaryTargetKeys,
} from "../types"
import numeral from "numeral"

interface Props {
  selectedPrimaryTarget: string
  secondaryTargets: SecondaryTargets
  totalTake: number
  crewRequired: number
  hardMode: boolean
  setHardMode: (hardMode: boolean) => void
  setSelectedPrimaryTarget: (newValue: PrimaryTargetKeys) => void
  increaseAmount: (key: SecondaryTargetKeys) => void
  decreaseAmount: (key: SecondaryTargetKeys) => void
}

export const CalculatorUI: React.FC<Props> = ({
  totalTake = 0,
  crewRequired = 0,
  hardMode = false,
  setHardMode,
  selectedPrimaryTarget,
  secondaryTargets,
  setSelectedPrimaryTarget,
  increaseAmount,
  decreaseAmount,
}) => {
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
      <div className="border m-2 p-4 flex flex-col lg:flex-row items-center justify-start lg:justify-between">
        <p className="text-xl font-bold">
          Total Take: ${numeral(totalTake ?? 0).format("0,0")}
        </p>
        <p className="text-xl font-bold">Required Crew: {crewRequired ?? 0}</p>
      </div>

      <div className="mb-4">
        <label>
          <input
            defaultChecked={hardMode}
            checked={hardMode}
            type="checkbox"
            onChange={() => setHardMode(!hardMode)}
          />
          <span className="pl-2 font-bold text-zinc-700">Hard Mode</span>
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
