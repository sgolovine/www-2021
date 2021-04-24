import React from "react"
import { ProjectCard } from "~/components/ProjectCard"
import { Section } from "~/components/Section"
import { Header, Subheader, Text } from "~/components/Typography"
import { useData } from "~/hooks/useData"

const IndexPage = () => {
  const { siteData } = useData()

  return (
    <>
      <Section>
        <Subheader>About Me</Subheader>
        <Text>{siteData.about.bio}</Text>
      </Section>
      <Section>
        <Subheader>Recent Projects</Subheader>
        {siteData.projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </Section>
    </>
  )
}

export default IndexPage
