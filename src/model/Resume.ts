export type ResumeWorkItem = {
  name: string
  url?: string
  startDate: string
  endDate: string
  positions: {
    position: string
    startDate?: string
    endDate?: string
    summary: string[]
  }[]
}

export interface Resume {
  basics: {
    name: string
    label: string
    image?: string
    phone: string
    url: string
    summary: string
    location: Record<
      "address" | "postalCode" | "city" | "countryCode" | "region",
      string
    >
    profiles: Record<"network" | "username" | "url", string>[]
  }
  work: ResumeWorkItem[]
  education: Record<
    "institution" | "url" | "area" | "studyType" | "startDate" | "endDate",
    string
  >[]
  skills: {
    name: string
    level: string
    keywords: string[]
  }[]
  projects: {
    name: string
    description: string
    highlights: string[]
    keywords: string[]
  }[]
}
