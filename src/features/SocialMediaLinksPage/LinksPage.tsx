import classNames from "classnames"
import Link from "next/link"
import { CopyrightText } from "~/components/common/CopyrightText"
import Punk from "~/components/punk"
import { GithubIcon, InstagramIcon, LinkedInIcon } from "~/icons/Brands"
import { Document } from "~/icons/Document"
import { Globe } from "~/icons/Globe"
import { Mail } from "~/icons/Mail"
import { WhatsApp } from "~/icons/WhatsApp"
import { ContactMeWidget } from "../ContactMeWidget"

interface Props {
  email: string
  github: string
  instagram: string
  linkedin: string
  website: string
  whatsApp: string
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
  whatsApp,
}) => (
  <div className="min-w-screen min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-pink-600 px-6">
    <div className="flex flex-row justify-center pt-12">
      <Punk />
    </div>
    <div className="flex-grow grid grid-rows-auto grid-cols-1 gap-5 pt-12 max-w-3xl mx-auto w-full">
      <a className={linkClasses} href={`mailto:${email}`}>
        <div className={classNames(iconContainerClasses, "text-blue-600")}>
          <Mail />
        </div>
        <p>Email Me</p>
      </a>
      <a className={linkClasses} href={whatsApp}>
        <div className={classNames(iconContainerClasses, "fill-whatsapp")}>
          <WhatsApp />
        </div>
        <p>WhatsApp</p>
      </a>
      <a href={github} className={linkClasses}>
        <div className={classNames(iconContainerClasses, "fill-github")}>
          <GithubIcon />
        </div>
        <p>Github</p>
      </a>
      <a href={instagram} className={linkClasses}>
        <div className={classNames(iconContainerClasses, "fill-instagram")}>
          <InstagramIcon />
        </div>
        <p>Instagram</p>
      </a>
      <a href={linkedin} className={linkClasses}>
        <div className={classNames(iconContainerClasses, "fill-linkedin")}>
          <LinkedInIcon />
        </div>
        <p>LinkedIn</p>
      </a>
      <a href={website} className={linkClasses}>
        <div className={classNames(iconContainerClasses, "text-blue-600")}>
          <Globe />
        </div>
        <p>Website</p>
      </a>
      <Link href="/resume">
        <a className={linkClasses}>
          <div className={classNames(iconContainerClasses, "text-blue-600")}>
            <Document />
          </div>
          <p>Resume</p>
        </a>
      </Link>
    </div>
    <CopyrightText />
    <ContactMeWidget lightTheme />
  </div>
)
