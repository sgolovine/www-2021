import classNames from "classnames"
import { useState } from "react"
import { CloseIcon } from "~/icons/Close"
import { SettingsIcon } from "~/icons/Settings"
import { CalculatorUI } from "./CalculatorUI"
import { primaryTargetOptions, secondaryCardOptions } from "./defines"
import { SettingsUI } from "./SettingsUI"

type TargetKeys = "cash" | "weed" | "painting" | "cocaine" | "gold"

type SecondaryTargets = Record<TargetKeys, number>

export const Calculator = () => {
  const [showSettingsUI, setShowSettingsUI] = useState<boolean>(false)
  const [selectedPrimaryTarget, setSelectedPrimaryTarget] = useState<string>("")
  const [secondaryTargets, setSecondaryTargets] = useState<SecondaryTargets>({
    cash: 0,
    weed: 0,
    painting: 0,
    cocaine: 0,
    gold: 0,
  })

  const increaseAmount = (value: TargetKeys) => {
    const newValue = secondaryTargets[value] + 1
    setSecondaryTargets(prev => ({
      ...prev,
      [value]: newValue,
    }))
  }

  const decreaseAmount = (value: TargetKeys) => {
    const newValue = secondaryTargets[value] - 1
    if (newValue >= 0) {
      setSecondaryTargets(prev => ({
        ...prev,
        [value]: newValue,
      }))
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-4 px-2">
      <div>
        <div className="flex flex-row items-center justify-end">
          <button onClick={() => setShowSettingsUI(prev => !prev)}>
            {showSettingsUI ? (
              <CloseIcon className="h-6 w-6 text-black" />
            ) : (
              <SettingsIcon />
            )}
          </button>
        </div>
      </div>
      {showSettingsUI ? (
        <SettingsUI />
      ) : (
        <CalculatorUI
          selectedPrimaryTarget={selectedPrimaryTarget}
          setSelectedPrimaryTarget={setSelectedPrimaryTarget}
          secondaryTargets={secondaryTargets}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
      )}
    </div>
  )
}
