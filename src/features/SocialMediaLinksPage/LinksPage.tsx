import classNames from "classnames"
import Link from "next/link"
import Punk from "~/components/punk"
import { GithubIcon, InstagramIcon, LinkedInIcon } from "~/icons/Brands"
import { Document } from "~/icons/Document"
import { Globe } from "~/icons/Globe"
import { Mail } from "~/icons/Mail"

interface Props {
  email: string
  github: string
  instagram: string
  linkedin: string
  website: string
}

const linkClasses = classNames(
  "bg-white",
  "shadow-md",
  "rounded-lg",
  "py-6",
  "px-4",
  "font-medium",
  "hover:bg-slate-200",
  "hover:shadow-xs",
  "transition-all",
  "ease-in-out",
  "flex",
  "flex-row",
  "items-center",
  "gap-5"
)

const iconContainerClasses = classNames("h-8", "w-8")

export const LinksPage: React.FC<Props> = ({
  email,
  github,
  instagram,
  linkedin,
  website,
}) => (
  <div className="min-h-screen min-w-screen bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-pink-600 px-6">
    <div className="flex flex-row justify-center pt-16">
      <Punk />
    </div>
    <div className="max-w-2xl grid grid-cols-1 grid-rows-auto mx-auto pt-8 gap-5">
      <a className={linkClasses} href={`mailto:${email}`}>
        <div className={iconContainerClasses}>
          <Mail />
        </div>
        <p>Email Me</p>
      </a>
      <a href={github} className={linkClasses}>
        <div className={iconContainerClasses}>
          <GithubIcon />
        </div>
        <p>Github</p>
      </a>
      <a href={instagram} className={linkClasses}>
        <div className={iconContainerClasses}>
          <InstagramIcon />
        </div>
        <p>Instagram</p>
      </a>
      <a href={linkedin} className={linkClasses}>
        <div className={iconContainerClasses}>
          <LinkedInIcon />
        </div>
        <p>LinkedIn</p>
      </a>
      <a href={website} className={linkClasses}>
        <div className={iconContainerClasses}>
          <Globe />
        </div>
        <p>Website</p>
      </a>
      <Link href="/resume">
        <a className={linkClasses}>
          <div className={iconContainerClasses}>
            <Document />
          </div>
          <p>Resume</p>
        </a>
      </Link>
    </div>
  </div>
)
