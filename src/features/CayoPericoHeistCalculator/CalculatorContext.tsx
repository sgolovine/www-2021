/**
 * Payout calculator context
 * Keeps track of all state in this app.
 */
import React, { ReactNode } from "react"
import {
  Config,
  PrimaryTargetKeys,
  SecondaryTargetKeys,
  SecondaryTargets,
} from "./types"
import { config as baseConfig } from "./defines"

type State = {
  hardMode: boolean
  config: Config
  selections: {
    primaryTarget: PrimaryTargetKeys
    secondaryTargets: SecondaryTargets
  }
}

type Actions = {
  // Enable hard mode
  setHardMode: (hardMode: boolean) => void

  // Set the configuration of the calculator
  setConfig: (config: Config) => void

  // Set the primary target
  setPrimaryTarget: (value: PrimaryTargetKeys) => void

  // Add a stack to a specific secondary target
  addSecondaryTargetStack: (target: SecondaryTargetKeys) => void

  // Remove a stack from a secondary target
  removeSecondaryTargetStack: (target: SecondaryTargetKeys) => void
}

type Context = {
  state: State
  actions: Actions
}

export const PayoutContext = React.createContext<Context>({} as Context)

export const PayoutContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [hardMode, setHardMode] = React.useState<boolean>(false)
  const [config, setConfig] = React.useState<Config>(baseConfig)
  const [primaryTargetSelection, setPrimaryTargetSelection] =
    React.useState<PrimaryTargetKeys>("pinkDiamond")
  const [secondaryTargetSelection, setSecondaryTargetSelection] =
    React.useState<SecondaryTargets>({
      cash: 0,
      weed: 0,
      cocaine: 0,
      gold: 0,
      painting: 0,
    })

  const setPrimaryTarget = (target: PrimaryTargetKeys) =>
    setPrimaryTargetSelection(target)

  const addSecondaryTargetStack = (target: SecondaryTargetKeys) => {
    setSecondaryTargetSelection(prevState => ({
      ...prevState,
      [target]: prevState[target] + 1,
    }))
  }

  const removeSecondaryTargetStack = (target: SecondaryTargetKeys) => {
    if (secondaryTargetSelection[target] >= 0) {
      setSecondaryTargetSelection(prevState => ({
        ...prevState,
        [target]: prevState[target] - 1,
      }))
    }
  }

  const value: Context = {
    state: {
      hardMode,
      config,
      selections: {
        primaryTarget: primaryTargetSelection,
        secondaryTargets: secondaryTargetSelection,
      },
    },
    actions: {
      setHardMode,
      setConfig,
      setPrimaryTarget,
      addSecondaryTargetStack,
      removeSecondaryTargetStack,
    },
  }

  return (
    <PayoutContext.Provider value={value}>{children}</PayoutContext.Provider>
  )
}
