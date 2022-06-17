import React from "react"
import { withMainLayout } from "~/components/layout"
import { PageLayout } from "./components/PageLayout"
import ResumePageHeader from "./components/ResumeHeader"
import { SectionLayout } from "./components/SectionLayout"
import { ContactInfoSection } from "./components/sections/ContactInfoSection"
import { EducationSection } from "./components/sections/EducationSection"
import { SideProjectsSection } from "./components/sections/SideProjectsSection"
import { SkillsSection } from "./components/sections/SkillsSection"
import { WorkExperienceSection } from "./components/sections/WorkExperienceSection"
import { useData } from "~/hooks/useData"

const ResumePage: React.FC = () => {
  const { siteData, resumeData } = useData()

  return (
    <>
      <ResumePageHeader />
      <PageLayout>
        <ContactInfoSection
          phone={siteData.phone_number}
          email={siteData.email}
          website={siteData.website}
          github={siteData.github}
          linkedin={siteData.linkedin}
        />
        <hr className="my-6" />
        <SectionLayout>
          <SkillsSection skills={resumeData.skills} />
        </SectionLayout>
        <SectionLayout>
          <WorkExperienceSection workExperience={resumeData.work_experience} />
        </SectionLayout>
        <SectionLayout>
          <SideProjectsSection sideProjects={resumeData.side_projects} />
        </SectionLayout>
        <SectionLayout>
          <EducationSection education={resumeData.education} />
        </SectionLayout>
      </PageLayout>
    </>
  )
}

// ts-prune-ignore-next
export default withMainLayout(ResumePage)
