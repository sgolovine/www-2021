type ResumeWorkItemPosition = {
  position: string
  startDate?: string
  endDate?: string
  summary: string[]
}

export type ResumeWorkItem = {
  name: string
  url?: string
  startDate: string
  endDate: string
  positions: ResumeWorkItemPosition[]
}

export type ResumeSkillItem = {
  name: string
  level: string
  keywords: string[]
}

export type ResumeProjectsItem = {
  name: string
  description: string
  highlights: string[]
  keywords: string[]
}

export type ResumeEducationItem = Record<
  "institution" | "url" | "area" | "studyType" | "startDate" | "endDate",
  string
>

export interface Resume {
  basics: {
    name: string
    label: string
    image?: string
    phone: string
    url: string
    summary: string[]
    location: Record<
      "address" | "postalCode" | "city" | "countryCode" | "region",
      string
    >
    profiles: Record<"network" | "username" | "url", string>[]
  }
  work: ResumeWorkItem[]
  education: ResumeEducationItem[]
  skills: ResumeSkillItem[]
  projects: ResumeProjectsItem[]
}
