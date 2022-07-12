import { Config, PrimaryTargetKeys, SecondaryTargetKeys } from "./types"

export const primaryTargetOptions: {
  label: string
  value: PrimaryTargetKeys
}[] = [
  {
    label: "Tequila",
    value: "tequila",
  },
  {
    label: "Ruby Necklace",
    value: "rubyNecklace",
  },
  {
    label: "Bearer Bonds",
    value: "bearerBonds",
  },
  {
    label: "Pink Diamond",
    value: "pinkDiamond",
  },
  {
    label: "Blank Panther",
    value: "blackPanther",
  },
]

export const secondaryCardOptions: {
  label: string
  value: SecondaryTargetKeys
}[] = [
  {
    label: "Cash",
    value: "cash",
  },
  {
    label: "Weed",
    value: "weed",
  },
  {
    label: "Painting",
    value: "painting",
  },
  {
    label: "Cocaine",
    value: "cocaine",
  },
  {
    label: "Gold",
    value: "gold",
  },
]

export const config: Config = {
  primaryTargets: {
    tequila: {
      normal: 900000,
      hard: 990000,
    },
    rubyNecklace: {
      normal: 1000000,
      hard: 1100000,
    },
    bearerBonds: {
      normal: 1100000,
      hard: 1210000,
    },
    pinkDiamond: {
      normal: 1300000,
      hard: 1430000,
    },
    blackPanther: {
      normal: 1900000,
      hard: 2090000,
    },
  },
  secondaryTargets: {
    cash: {
      stackValue: 90000,
      stackWeight: 0.25,
      fullBagValue: 360000,
    },
    weed: {
      stackValue: 147870,
      stackWeight: 0.33,
      fullBagValue: 443610,
    },
    painting: {
      stackValue: 189500,
      stackWeight: 0.5,
      fullBagValue: 379000,
    },
    cocaine: {
      stackValue: 220095,
      stackWeight: 0.5,
      fullBagValue: 440190,
    },
    gold: {
      stackValue: 332184,
      stackWeight: 0.66,
      fullBagValue: 498276,
    },
  },
}
