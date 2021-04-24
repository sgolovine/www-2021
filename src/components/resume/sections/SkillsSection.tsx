import React from "react";
import { SectionHeader } from "../SectionHeader";

type Props = {
  skills: string[];
};

export const SkillsSection: React.FC<Props> = ({ skills }) => {
  return (
    <div>
      <SectionHeader>Core Qualifications</SectionHeader>
      {skills.map((skill, i) => {
        return (
          <p key={i} className="py-4">
            {skill}
          </p>
        );
      })}
    </div>
  );
};
