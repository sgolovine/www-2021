/**
 * Payout calculator context
 * Keeps track of all state in this app.
 */
import React, { ReactNode, useEffect, useState } from "react"
import {
  BreakdownValues,
  Config,
  PrimaryTargetKeys,
  SecondaryTargetKeys,
  SecondaryTargets,
} from "./types"
import { config as baseConfig } from "./defines"

type State = {
  hardMode: boolean
  eliteChallenge: boolean
  hiddenSafe: boolean
  config: Config
  selections: {
    primaryTarget: PrimaryTargetKeys
    secondaryTargets: SecondaryTargets
  }
  results: {
    requiredCrew: number
    totalTake: number
  }
  breakdown: BreakdownValues
}

type Actions = {
  // Enable hard mode
  setHardMode: (hardMode: boolean) => void

  // Enable/Disable Elite Challenge
  setEliteChallenge: (challenge: boolean) => void

  // Add take from hidden safe
  setHiddenSafe: (safe: boolean) => void

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
  const [breakdown, setBreakdown] = useState<BreakdownValues>({
    primaryTarget: 0,
    secondaryTarget: 0,
    hiddenSafe: 0,
    eliteChallenge: 0,
    fencingFee: 0,
    pavelFee: 0,
  })
  const [hiddenSafe, setHiddenSafe] = useState<boolean>(false)
  const [eliteChallenge, setEliteChallenge] = useState<boolean>(false)
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
    const requiredCrew =
      Math.ceil(totalWeight) === 0 ? 1 : Math.ceil(totalWeight)

    // TODO: Calculate Total Take
    const primaryTargetValue =
      config.primaryTargets[primaryTargetSelection][
        hardMode ? "hard" : "normal"
      ]

    const cashValue =
      config.secondaryTargets.cash.stackValue * secondaryTargetSelection.cash
    const weedValue =
      config.secondaryTargets.weed.stackValue * secondaryTargetSelection.weed
    const cocaineValue =
      config.secondaryTargets.cocaine.stackValue *
      secondaryTargetSelection.cocaine
    const goldValue =
      config.secondaryTargets.gold.stackValue * secondaryTargetSelection.gold
    const paintingValue =
      config.secondaryTargets.painting.stackValue *
      secondaryTargetSelection.painting

    const secondaryTargetValue =
      cashValue + weedValue + cocaineValue + goldValue + paintingValue

    const eliteChallengeValue = eliteChallenge
      ? requiredCrew * config.extras.eliteChallengePerPlayer
      : 0

    const hiddenSafeValue = hiddenSafe ? config.extras.hiddenSafeValue : 0

    const totalValue =
      primaryTargetValue +
      secondaryTargetValue +
      eliteChallengeValue +
      hiddenSafeValue

    const pavelFee = config.fees.pavelFeePercentage * totalValue
    const fencingFee = config.fees.fencingFeePercentage * totalValue

    const totalFees = pavelFee + fencingFee

    const finalTake = totalValue - totalFees

    setBreakdown({
      primaryTarget: primaryTargetValue,
      secondaryTarget: secondaryTargetValue,
      hiddenSafe: hiddenSafeValue,
      eliteChallenge: eliteChallengeValue,
      fencingFee,
      pavelFee,
    })

    setRequiredCrew(requiredCrew)
    setTotalTake(finalTake)
  }, [
    hardMode,
    primaryTargetSelection,
    secondaryTargetSelection,
    config,
    eliteChallenge,
    hiddenSafe,
  ])

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
      eliteChallenge,
      hardMode,
      hiddenSafe,
      config,
      selections: {
        primaryTarget: primaryTargetSelection,
        secondaryTargets: secondaryTargetSelection,
      },
      results: {
        requiredCrew,
        totalTake,
      },
      breakdown,
    },
    actions: {
      setHiddenSafe,
      setEliteChallenge,
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
