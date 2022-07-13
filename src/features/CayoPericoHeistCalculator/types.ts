export type PrimaryTargetKeys =
  | "tequila"
  | "rubyNecklace"
  | "bearerBonds"
  | "pinkDiamond"
  | "blackPanther"

export type SecondaryTargetKeys =
  | "cash"
  | "weed"
  | "painting"
  | "cocaine"
  | "gold"

export type SecondaryTargets = Record<SecondaryTargetKeys, number>

type PrimaryTarget = Record<"normal" | "hard", number>

type SecondaryTarget = Record<
  "stackValue" | "stackWeight" | "fullBagValue",
  number
>

export type ConfigExtras = Record<
  "hiddenSafeValue" | "eliteChallengePerPlayer",
  number
>

export type ConfigFees = Record<
  "fencingFeePercentage" | "pavelFeePercentage",
  number
>

export type Config = {
  primaryTargets: Record<PrimaryTargetKeys, PrimaryTarget>
  secondaryTargets: Record<SecondaryTargetKeys, SecondaryTarget>
  extras: ConfigExtras
  fees: ConfigFees
}

export type BreakdownValues = Record<
  | "primaryTarget"
  | "secondaryTarget"
  | "hiddenSafe"
  | "eliteChallenge"
  | "fencingFee"
  | "pavelFee",
  number
>
