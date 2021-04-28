import { PageProps } from "gatsby"
import React, { useContext, useEffect } from "react"
import { PageLayout } from "~/components/resume/PageLayout"
import ResumePageHeader from "~/components/resume/ResumeHeader"
import { SectionLayout } from "~/components/resume/SectionLayout"
import { ContactInfoSection } from "~/components/resume/sections/ContactInfoSection"
import { EducationSection } from "~/components/resume/sections/EducationSection"
import { SideProjectsSection } from "~/components/resume/sections/SideProjectsSection"
import { SkillsSection } from "~/components/resume/sections/SkillsSection"
import { WorkExperienceSection } from "~/components/resume/sections/WorkExperienceSection"
import useAnalytics from "~/hooks/useAnalytics"
import { useData } from "~/hooks/useData"

const ResumePage = ({ location }: PageProps) => {
  const { resumeData } = useData()
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.trackPage({
      title: "Resume",
      href: location.href,
    })
  }, [location])

  return (
    <>
      <ResumePageHeader />
      <PageLayout>
        <ContactInfoSection contactInfo={resumeData.contactInfo} />
        <hr className="my-6" />
        <SectionLayout>
          <SkillsSection skills={resumeData.skills} />
        </SectionLayout>
        <SectionLayout>
          <WorkExperienceSection workExperience={resumeData.workExperience} />
        </SectionLayout>
        <SectionLayout>
          <SideProjectsSection sideProjects={resumeData.sideProjects} />
        </SectionLayout>
        <SectionLayout>
          <EducationSection education={resumeData.education} />
        </SectionLayout>
      </PageLayout>
    </>
  )
}

// ts-prune-ignore-next
export default ResumePage
