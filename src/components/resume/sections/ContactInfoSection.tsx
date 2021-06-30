import React from "react"
import { stripHttp } from "~/helpers/stripHttp"

type Props = {
  phone: string
  email: string
  website: string | null
  github: string
  linkedin: string
}

type ContactInfoItemProps = {
  label: string
  value: string
  href: string
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  label,
  value,
  href,
}) => (
  <div className="flex flex-row justify-between">
    <p className="w-20 font-bold text-sm">{label}</p>
    <a href={href} className="text-sm hover:underline">
      {value}
    </a>
  </div>
)

export const ContactInfoSection: React.FC<Props> = ({
  phone,
  email,
  website,
  github,
  linkedin,
}) => (
  <div>
    <div className="flex flex-col sm:flex-row sm:justify-between items-initial sm:items-start">
      <div className="self-start w-full sm:w-1/3">
        <ContactInfoItem label="Phone" value={phone} href={`tel:${phone}`} />
        <ContactInfoItem label="Email" value={email} href={`mailto:${email}`} />
      </div>
      <div className="self-end w-full sm:w-1/2">
        {website && (
          <ContactInfoItem
            label="Website"
            value={stripHttp(website)}
            href={website}
          />
        )}
        <ContactInfoItem
          label="Github"
          value={stripHttp(github)}
          href={github}
        />
        <ContactInfoItem
          label="LinkedIn"
          value={stripHttp(linkedin)}
          href={linkedin}
        />
      </div>
    </div>
  </div>
)
