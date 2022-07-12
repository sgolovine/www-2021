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
  "normalStackValue" | "hardStackValue" | "stackWeight" | "fullBagValue",
  number
>

export type Config = {
  primaryTargets: Record<PrimaryTargetKeys, PrimaryTarget>
  secondaryTargets: Record<SecondaryTargetKeys, SecondaryTarget>
}
