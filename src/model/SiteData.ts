export type ResumeContactInfo = {
  email: string
  github: string
  linkedin: string
  phone: string
  website: string
}

export type ResumeEducation = {
  degree: string
  gradDate: string
  name: string
}

export type ResumeSideProjects = {
  type: string
  startDate: string
  endDate: string
  name: string
  description: string
  link: string
}

export type ResumeWorkExperience = {
  name: string
  position: string
  startDate: string
  endDate: string
  accomplishments: string[]
  url: string
}
export interface ResumeData {
  contactInfo: ResumeContactInfo
  education: ResumeEducation[]
  sideProjects: ResumeSideProjects[]
  skills: string[]
  workExperience: ResumeWorkExperience[]
}

export type SiteProject = {
  name: string
  href: string
  desc: string
}

export type SiteLinks = {
  key: string
  name: string
  value: string
  type: string
}

export type SiteContact = {
  email: string
  phone: string
}

export type SiteAbout = {
  bio: string
}

export type SiteWork = {
  name: string
  url?: string
  description: string
  type: "professional" | "side-project"
}

export interface SiteData {
  about: SiteAbout
  contact: SiteContact
  links: SiteLinks[]
  projects: SiteProject[]
  work: SiteWork[]
}

export interface NewSiteData {
  bio: string
  work_data: {
    name: string
    description: string
    project_type: "side-project" | "professional"
    show_in_recent_projects: boolean
    url: string | null
  }[]
  dev_to: string
  email: string
  github: string
  instagram: string
  linkedin: string
  phone_number: string
  phone_number_alt: string | null
  twitter: string
  website: string | null
}
