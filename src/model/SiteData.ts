export interface SiteWorkData {
  name: string
  description: string
  "project-type": "side-project" | "professional"
  "show-in-recent-projects": boolean
  url: string | null
}

export interface SiteData {
  bio: string
  work_data: SiteWorkData[]
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

interface ResumeEducationData {
  college_name: string
  degree_earned: string
  grad_date: string
}

interface ResumeSideProjectsData {
  current_project: boolean
  description: string
  end_date: string
  link: string
  name: string
  start_date: string
  type: string
}

interface ResumeSkillsData {
  skill: string
}

interface ResumeWorkExperienceAccomplishments {
  accomplishment: string
}

interface ResumeWorkExperienceData {
  accomplishments: ResumeWorkExperienceAccomplishments[]
  current_employer: boolean
  end_date: string
  name: string
  position: string
  start_date: string
  url: string
}

export interface ResumeData {
  education: ResumeEducationData[]
  side_projects: ResumeSideProjectsData[]
  skills: ResumeSkillsData[]
  work_experience: ResumeWorkExperienceData[]
}
