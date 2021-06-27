// import { useStaticQuery, graphql } from "gatsby"
import { ResumeData, SiteData } from "~/model/SiteData"

// function normalizeData(nodes: any[]) {
//   return nodes.reduce((acc: any, item: any) => {
//     const subsetDataKeys = Object.keys(item)
//     const cleanSubset = subsetDataKeys.reduce((acc, subsetKey) => {
//       if (item[subsetKey]) {
//         return {
//           ...acc,
//           [subsetKey]: item[subsetKey],
//         }
//       } else {
//         return acc
//       }
//     }, {})

//     const subsetKey = Object.keys(cleanSubset)[0]

//     return {
//       ...acc,
//       [subsetKey]: cleanSubset[subsetKey as keyof typeof cleanSubset],
//     }
//   }, {})
// }

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

export const useData = (): {
  resumeData: ResumeData
  siteData: SiteData
} => {
  return { resumeData: placeholderResumeData, siteData: placeholderSiteData }
}
