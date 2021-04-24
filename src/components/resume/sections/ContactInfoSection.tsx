import React from "react";
import { stripHttp } from "~/helpers/stripHttp";
import { ContactInfo } from "~/model/Resume";

type Props = {
  contactInfo: ContactInfo;
};

type ContactInfoItemProps = {
  label: string;
  value: string;
  href: string;
};

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  label,
  value,
  href,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="w-20 font-bold text-sm">{label}</p>
      <a href={href} className="text-sm hover:underline">
        {value}
      </a>
    </div>
  );
};

export const ContactInfoSection: React.FC<Props> = ({ contactInfo }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-initial sm:items-start">
        <div className="self-start w-full sm:w-1/3">
          <ContactInfoItem
            label="Phone"
            value={contactInfo.phone}
            href={`tel:${contactInfo.phone}`}
          />
          <ContactInfoItem
            label="Email"
            value={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
          />
        </div>
        <div className="self-end w-full sm:w-1/2">
          <ContactInfoItem
            label="Website"
            value={stripHttp(contactInfo.website)}
            href={contactInfo.website}
          />
          <ContactInfoItem
            label="Github"
            value={stripHttp(contactInfo.github)}
            href={contactInfo.github}
          />
          <ContactInfoItem
            label="LinkedIn"
            value={stripHttp(contactInfo.linkedin)}
            href={contactInfo.linkedin}
          />
        </div>
      </div>
    </div>
  );
};
