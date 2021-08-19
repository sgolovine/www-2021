import React from "react"
import { withLayout } from "~/components/layout/withLayout"
import { PageLayout } from "~/components/resume/PageLayout"
import ResumePageHeader from "~/components/resume/ResumeHeader"
import { SectionLayout } from "~/components/resume/SectionLayout"
import { ContactInfoSection } from "~/components/resume/sections/ContactInfoSection"
import { EducationSection } from "~/components/resume/sections/EducationSection"
import { SideProjectsSection } from "~/components/resume/sections/SideProjectsSection"
import { SkillsSection } from "~/components/resume/sections/SkillsSection"
import { WorkExperienceSection } from "~/components/resume/sections/WorkExperienceSection"
import { useData } from "~/hooks/useData"

const ResumePage = () => {
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
export default withLayout(ResumePage)
