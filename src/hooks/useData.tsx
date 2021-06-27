import { graphql, useStaticQuery } from "gatsby"
import { NewSiteData, ResumeData, SiteData } from "~/model/SiteData"

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
  allSiteDataJson: {
    nodes: RawData[]
  }
}

interface RawData {
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

function normalizeSiteData(data: RawData[]) {
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
  }, {}) as NewSiteData

  return normalizedData
}

export const useData = (): {
  resumeData: ResumeData
  siteData: SiteData
  newSiteData: NewSiteData
} => {
  const query = useStaticQuery<Query>(graphql`
    query {
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
  const siteData = normalizeSiteData(query.allSiteDataJson.nodes)
  return {
    resumeData: placeholderResumeData,
    siteData: placeholderSiteData,
    newSiteData: siteData,
  }
}
