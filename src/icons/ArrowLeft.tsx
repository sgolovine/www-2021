import React from "react"
import { BRAND_YELLOW } from "~/defines/colors"

export const ArrowLeft: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke={BRAND_YELLOW}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 17l-5-5m0 0l5-5m-5 5h12"
    />
  </svg>
)
