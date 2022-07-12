import { useContext, useState } from "react"
import { CloseIcon } from "~/icons/Close"
import { SettingsIcon } from "~/icons/Settings"
import { PayoutContext } from "./CalculatorContext"
import { CalculatorUI } from "./components/CalculatorUI"
import { SettingsUI } from "./components/SettingsUI"

export const Calculator = () => {
  const payoutContext = useContext(PayoutContext)
  const [showSettingsUI, setShowSettingsUI] = useState<boolean>(false)

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
        <SettingsUI
          close={() => setShowSettingsUI(false)}
          config={payoutContext.state.config}
          setConfig={payoutContext.actions.setConfig}
        />
      ) : (
        <CalculatorUI
          hardMode={payoutContext.state.hardMode}
          setHardMode={payoutContext.actions.setHardMode}
          totalTake={payoutContext.state.results.totalTake}
          crewRequired={payoutContext.state.results.requiredCrew}
          selectedPrimaryTarget={payoutContext.state.selections.primaryTarget}
          setSelectedPrimaryTarget={payoutContext.actions.setPrimaryTarget}
          secondaryTargets={payoutContext.state.selections.secondaryTargets}
          increaseAmount={payoutContext.actions.addSecondaryTargetStack}
          decreaseAmount={payoutContext.actions.removeSecondaryTargetStack}
        />
      )}
    </div>
  )
}
