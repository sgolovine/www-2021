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
export interface ResumeData {
  contactInfo: ResumeContactInfo
  education: {}[]
  sideProjects: {
    type: string
    startDate: string
    endDate: string
    name: string
    description: string
    link: string
  }[]
  skills: string[]
  workExperience: {
    name: string
    position: string
    startDate: string
    endDate: string
    accomplishments: string[]
  }[]
}

export interface SiteData {
  about: {
    bio: string
  }
  contact: {
    email: string
    phone: string
  }
  links: {
    key: string
    name: string
    value: string
    type: string
  }[]
  projects: {
    name: string
    href: string
    desc: string
  }[]
}
