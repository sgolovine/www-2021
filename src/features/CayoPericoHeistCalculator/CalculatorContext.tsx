/**
 * Payout calculator context
 * Keeps track of all state in this app.
 */
import React, { ReactNode, useEffect, useState } from "react"
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
  results: {
    requiredCrew: number
    totalTake: number
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
  const [requiredCrew, setRequiredCrew] = useState<number>(0)
  const [totalTake, setTotalTake] = useState<number>(0)
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

  useEffect(() => {
    // Multiply the number of stacks by the stack weight for each target
    const cashWeight =
      secondaryTargetSelection.cash * config.secondaryTargets.cash.stackWeight
    const weedWeight =
      secondaryTargetSelection.weed * config.secondaryTargets.weed.stackWeight
    const cocaineWeight =
      secondaryTargetSelection.cocaine *
      config.secondaryTargets.cocaine.stackWeight
    const goldWeight =
      secondaryTargetSelection.gold * config.secondaryTargets.gold.stackWeight
    const paintingWeight =
      secondaryTargetSelection.painting *
      config.secondaryTargets.painting.stackWeight
    const totalWeight =
      cashWeight + weedWeight + cocaineWeight + goldWeight + paintingWeight

    // Get the ceiling (round up) to get # of crew members
    const requiredCrew = Math.ceil(totalWeight)

    const difficulty = hardMode ? "hardStackValue" : "normalStackValue"

    // TODO: Calculate Total Take
    const primaryTargetValue =
      config.primaryTargets[primaryTargetSelection][
        hardMode ? "hard" : "normal"
      ]

    const cashValue =
      config.secondaryTargets.cash[difficulty] * secondaryTargetSelection.cash
    const weedValue =
      config.secondaryTargets.weed[difficulty] * secondaryTargetSelection.weed
    const cocaineValue =
      config.secondaryTargets.cocaine[difficulty] *
      secondaryTargetSelection.cocaine
    const goldValue =
      config.secondaryTargets.gold[difficulty] * secondaryTargetSelection.gold
    const paintingValue =
      config.secondaryTargets.painting[difficulty] *
      secondaryTargetSelection.painting

    const totalValue =
      primaryTargetValue +
      cashValue +
      weedValue +
      cocaineValue +
      goldValue +
      paintingValue

    setRequiredCrew(requiredCrew)
    setTotalTake(totalValue)
  }, [hardMode, primaryTargetSelection, secondaryTargetSelection, config])

  const setPrimaryTarget = (target: PrimaryTargetKeys) =>
    setPrimaryTargetSelection(target)

  const addSecondaryTargetStack = (target: SecondaryTargetKeys) => {
    setSecondaryTargetSelection(prevState => ({
      ...prevState,
      [target]: prevState[target] + 1,
    }))
  }

  const removeSecondaryTargetStack = (target: SecondaryTargetKeys) => {
    setSecondaryTargetSelection(prevState => {
      if (prevState[target] > 0) {
        return {
          ...prevState,
          [target]: prevState[target] - 1,
        }
      } else {
        // no-op
        return prevState
      }
    })
  }

  const value: Context = {
    state: {
      hardMode,
      config,
      selections: {
        primaryTarget: primaryTargetSelection,
        secondaryTargets: secondaryTargetSelection,
      },
      results: {
        requiredCrew,
        totalTake,
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
