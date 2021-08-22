import { Link } from "gatsby"
import React from "react"
import { ArrowLeft } from "~/icons/ArrowLeft"

interface Props {
  backRoute: string
}

export const BackButton: React.FC<Props> = ({ backRoute }) => (
  <Link className="flex flex-row items-center" to={backRoute}>
    <ArrowLeft />
    <p className="text-lg font-bold text-brand-link hover:text-brand-yellow">
      BACK
    </p>
  </Link>
)
