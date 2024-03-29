import { useState } from "react"
import {
  Config,
  ConfigExtras,
  ConfigFees,
  PrimaryTargetKeys,
  SecondaryTargetKeys,
} from "../types"

interface Props {
  config: Config
  setConfig: (newConfig: Config) => void
  close: () => void
}

export const SettingsUI: React.FC<Props> = ({ config, setConfig, close }) => {
  const [internalConfig, setInternalConfig] = useState<Config>(config)

  const setPrimaryTarget = ({
    hardMode,
    target,
    newValue,
  }: {
    hardMode: boolean
    target: PrimaryTargetKeys
    newValue: number
  }) => {
    setInternalConfig(prevState => ({
      ...prevState,
      primaryTargets: {
        ...prevState.primaryTargets,
        [target]: {
          ...prevState.primaryTargets[target],
          ...(hardMode ? { hard: newValue } : { normal: newValue }),
        },
      },
    }))
  }

  const setSecondaryTargetValues = ({
    target,
    newValue,
  }: {
    target: SecondaryTargetKeys
    newValue: number
  }) => {
    setInternalConfig(prevState => ({
      ...prevState,
      secondaryTargets: {
        ...prevState.secondaryTargets,
        [target]: {
          ...prevState.secondaryTargets[target],
          stackValue: newValue,
        },
      },
    }))
  }

  const setSecondaryTargetWeight = ({
    target,
    newWeight,
  }: {
    target: SecondaryTargetKeys
    newWeight: number
  }) => {
    setInternalConfig(prevState => ({
      ...prevState,
      secondaryTargets: {
        ...prevState.secondaryTargets,
        [target]: {
          ...prevState.secondaryTargets[target],
          stackWeight: newWeight,
        },
      },
    }))
  }

  const setFees = ({
    target,
    newValue,
  }: {
    target: keyof ConfigFees
    newValue: number
  }) => {
    setInternalConfig(prevState => ({
      ...prevState,
      fees: {
        ...prevState.fees,
        [target]: newValue,
      },
    }))
  }

  const setExtras = ({
    target,
    newValue,
  }: {
    target: keyof ConfigExtras
    newValue: number
  }) => {
    setInternalConfig(prevState => ({
      ...prevState,
      extras: {
        ...prevState.extras,
        [target]: newValue,
      },
    }))
  }

  const handleSave = () => {
    setConfig(internalConfig)
    alert("changes saved")
    close()
  }

  const handleCancel = () => {
    setInternalConfig(config)
    close()
  }

  const renderPrimaryTargetSettings = () => (
    <>
      <h2 className="text-lg font-bold py-4">Primary Target Values</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Target</th>
            <th>Value (Normal)</th>
            <th>Value (Hard)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tequilla</td>
            <td>
              <input
                value={internalConfig.primaryTargets.tequila.normal}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: false,
                    target: "tequila",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
            <td>
              <input
                value={internalConfig.primaryTargets.tequila.hard}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: true,
                    target: "tequila",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Ruby Necklace</td>
            <td>
              <input
                value={internalConfig.primaryTargets.rubyNecklace.normal}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: false,
                    target: "rubyNecklace",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
            <td>
              <input
                value={internalConfig.primaryTargets.rubyNecklace.hard}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: true,
                    target: "rubyNecklace",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Bearer Bonds</td>
            <td>
              <input
                value={internalConfig.primaryTargets.bearerBonds.normal}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: false,
                    target: "bearerBonds",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
            <td>
              <input
                value={internalConfig.primaryTargets.bearerBonds.hard}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: true,
                    target: "bearerBonds",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Pink Diamond</td>
            <td>
              <input
                value={internalConfig.primaryTargets.pinkDiamond.normal}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: false,
                    target: "pinkDiamond",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
            <td>
              <input
                value={internalConfig.primaryTargets.pinkDiamond.hard}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: true,
                    target: "pinkDiamond",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Black Panther</td>
            <td>
              <input
                value={internalConfig.primaryTargets.blackPanther.normal}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: false,
                    target: "blackPanther",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
            <td>
              <input
                value={internalConfig.primaryTargets.blackPanther.hard}
                type="number"
                className="border"
                onChange={e =>
                  setPrimaryTarget({
                    hardMode: true,
                    target: "blackPanther",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )

  const renderSecondaryTargetSettings = () => (
    <>
      <h2 className="text-lg font-bold py-4">
        Secondary Target Values and Weights
      </h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Target</th>
            <th>Value (Normal)</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cash</td>
            <td>
              <input
                value={internalConfig.secondaryTargets.cash.stackValue}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetValues({
                    target: "cash",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
            <td>
              <input
                value={internalConfig.secondaryTargets.cash.stackWeight}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetWeight({
                    target: "cash",
                    newWeight: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Weed</td>
            <td>
              <input
                value={internalConfig.secondaryTargets.weed.stackValue}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetValues({
                    target: "weed",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>

            <td>
              <input
                value={internalConfig.secondaryTargets.weed.stackWeight}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetWeight({
                    target: "weed",
                    newWeight: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Painting</td>
            <td>
              <input
                value={internalConfig.secondaryTargets.painting.stackValue}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetValues({
                    target: "painting",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>

            <td>
              <input
                value={internalConfig.secondaryTargets.painting.stackWeight}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetWeight({
                    target: "painting",
                    newWeight: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Cocaine</td>
            <td>
              <input
                value={internalConfig.secondaryTargets.cocaine.stackValue}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetValues({
                    target: "cocaine",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>

            <td>
              <input
                value={internalConfig.secondaryTargets.cocaine.stackWeight}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetWeight({
                    target: "cocaine",
                    newWeight: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>
              <input
                value={internalConfig.secondaryTargets.gold.stackValue}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetValues({
                    target: "gold",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
            <td>
              <input
                value={internalConfig.secondaryTargets.gold.stackWeight}
                type="number"
                className="border"
                onChange={e =>
                  setSecondaryTargetWeight({
                    target: "gold",
                    newWeight: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )

  const renderExtrasAndFees = () => (
    <>
      <h2 className="text-lg font-bold py-4">Extras and Fees</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fencing Fee (Percentage)</td>
            <td>
              <input
                className="border"
                value={config.fees.fencingFeePercentage}
                onChange={e =>
                  setFees({
                    target: "fencingFeePercentage",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Pavel Fee (Percentage)</td>
            <td>
              <input
                className="border"
                value={config.fees.pavelFeePercentage}
                onChange={e =>
                  setFees({
                    target: "pavelFeePercentage",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Hidden Safe Value</td>
            <td>
              <input
                className="border"
                value={config.extras.hiddenSafeValue}
                onChange={e =>
                  setExtras({
                    target: "hiddenSafeValue",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>Elite Challenge Bonus (per player)</td>
            <td>
              <input
                className="border"
                value={config.extras.eliteChallengePerPlayer}
                onChange={e =>
                  setExtras({
                    target: "eliteChallengePerPlayer",
                    newValue: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )

  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-4">Settings</h1>
      <p className="text-center">
        The numbers that this app uses to calculate payouts. If you believe them
        to be incorrect you can change them here. Default values are taken from{" "}
        <a
          href="https://www.reddit.com/r/gtaonline/comments/kjg6t4/cayo_perico_primarysecondary_targets_payout_guide/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          this reddit post on /r/gtaonline
        </a>
      </p>
      <hr className="my-6" />
      {renderPrimaryTargetSettings()}
      {renderSecondaryTargetSettings()}
      {renderExtrasAndFees()}
      <div className="py-6">
        <button
          className="border px-4 py-2 rounded shadow bg-red-500 hover:bg-red-400 active:bg-red-600 text-white"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="border px-4 py-2 rounded shadow bg-green-500 hover:bg-green-400 active:bg-green-600 text-white"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}
