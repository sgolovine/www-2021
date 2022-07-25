export enum ProjectType {
  SideProject = "side-project",
  ProfessionalProject = "professional-project",
}

export interface Work {
  showInRecents: boolean
  name: string
  url: string
  description: string
  projectType: ProjectType
}

export interface SiteData {
  bio: string
  phoneNumber: string
  whatsApp: string
  phoneNumberAlt: string
  email: string
  github: string
  instagram: string
  twitter: string
  devTo: string
  website: string
  linkedin: string
  work: Work[]
  recentWork: Work[]
  debug: {
    version: string
    commit: string
  }
}
