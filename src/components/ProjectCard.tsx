import React from "react"
import { ExternalLinkIcon } from "~/icons/ExternalLink"
import { SiteProject } from "~/model/SiteData"

interface Props {
  project: SiteProject
}

export const ProjectCard: React.FC<Props> = ({ project }) => (
  <div className="pb-8">
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={project.href}
      className="flex flex-row hover:underline"
    >
      <span className="pr-2">{project.name}</span>
      <ExternalLinkIcon />
    </a>
    <p className="leading-relaxed">{project.desc}</p>
  </div>
)
