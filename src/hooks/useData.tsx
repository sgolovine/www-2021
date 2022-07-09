import { SiteData, ResumeData } from "~/model/SiteData"

export const useData = (): {
  siteData: SiteData
  resumeData: ResumeData
} => ({
  siteData: {
    bio: "hello",
    dev_to: "dev-to",
    email: "email",
    github: "",
    instagram: "",
    linkedin: "",
    phone_number: "",
    phone_number_alt: "",
    twitter: "",
    website: "",
    work_data: [],
  },
  resumeData: {
    work_experience: [],
    education: [],
    side_projects: [],
    skills: [],
  },
})
