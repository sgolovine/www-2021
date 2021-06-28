import { graphql, useStaticQuery } from "gatsby"
import {
  NewResumeData,
  NewSiteData,
  ResumeData,
  SiteData,
} from "~/model/SiteData"

const placeholderResumeData: ResumeData = {
  contactInfo: {
    email: "string",
    github: "string",
    linkedin: "string",
    phone: "string",
    website: "string",
  },
  education: [
    {
      degree: "string",
      gradDate: "string",
      name: "string,",
    },
  ],
  sideProjects: [
    {
      type: "string",
      startDate: "string",
      endDate: "string",
      name: "string",
      description: "string",
      link: "string",
    },
  ],
  skills: ["foo", "bar", "baz"],
  workExperience: [
    {
      name: "string",
      position: "string",
      startDate: "string",
      endDate: "string",
      accomplishments: ["foo", "bar"],
      url: "string",
    },
  ],
}

const placeholderSiteData: SiteData = {
  about: {
    bio: "foobar",
  },
  contact: {
    email: "string",
    phone: "string",
  },
  links: [
    {
      key: "foo",
      name: "foo",
      value: "foo",
      type: "foo",
    },
  ],
  projects: [
    {
      name: "foo",
      href: "foo",
      desc: "foo",
    },
  ],
  work: [
    {
      name: "foo",
      description: "foo",
      type: "professional",
    },
  ],
}

interface Query {
  allResumeDataJson: {
    nodes: RawResumeData[]
  }
  allSiteDataJson: {
    nodes: RawSiteData[]
  }
}

interface RawSiteData {
  bio: string | null
  dev_to: string | null
  email: string | null
  github: string | null
  instagram: string | null
  linkedin: string | null
  phone_number: string | null
  phone_number_alt: string | null
  twitter: string | null
  website: string | null
  work_data:
    | {
        name: string
        description: string
        project_type: "side-project" | "professional"
        show_in_recent_projects: boolean
        url: string | null
      }[]
    | null
}

interface RawResumeData {
  education:
    | {
        college_name: string
        degree_earned: string
        grad_date: string
      }[]
    | null
  side_projects:
    | {
        current_project: boolean
        description: string
        end_date: string
        link: string
        name: string
        start_date: string
        type: string
      }[]
    | null
  skills:
    | {
        skill: string
      }[]
    | null
  workExperience: {
    accomplishments: {
      accomplishment: string
    }[]
    current_employer: boolean
    end_date: string
    name: string
    position: string
    start_date: string
    url: string
  }[]
}

function normalizeData<T, R>(data: T[]) {
  const normalizedData = data.reduce((acc, item) => {
    const subsetKeys = Object.keys(item)
    const result = subsetKeys.reduce((acc, subsetItem) => {
      const currentItem = item[subsetItem as keyof typeof item]

      if (currentItem) {
        return {
          ...acc,
          [subsetItem]: currentItem,
        }
      }
      return acc
    }, {})

    return {
      ...acc,
      ...result,
    }
  }, {}) as R

  return normalizedData
}

export const useData = (): {
  resumeData: ResumeData
  siteData: SiteData
  newSiteData: NewSiteData
  newResumeData: NewResumeData
} => {
  const query = useStaticQuery<Query>(graphql`
    query {
      allResumeDataJson {
        nodes {
          education {
            college_name
            degree_earned
            grad_date
          }
          side_projects {
            current_project
            description
            end_date
            link
            name
            start_date
            type
          }
          skills {
            skill
          }
          work_experience {
            accomplishments {
              accomplishment
            }
            current_employer
            end_date
            name
            position
            start_date
            url
          }
        }
      }
      allSiteDataJson {
        nodes {
          bio
          dev_to
          email
          github
          instagram
          linkedin
          phone_number
          phone_number_alt
          twitter
          website
          work_data {
            name
            description
            project_type
            show_in_recent_projects
            url
          }
        }
      }
    }
  `)
  const siteData = normalizeData<RawSiteData, NewSiteData>(
    query.allSiteDataJson.nodes
  )
  const resumeData = normalizeData<RawResumeData, NewResumeData>(
    query.allResumeDataJson.nodes
  )
  return {
    resumeData: placeholderResumeData,
    siteData: placeholderSiteData,
    newSiteData: siteData,
    newResumeData: resumeData,
  }
}
