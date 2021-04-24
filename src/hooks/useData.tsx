import { useStaticQuery, graphql } from "gatsby"
import { ResumeData, SiteData } from "~/model/SiteData"

function normalizeData(nodes: any[]) {
  return nodes.reduce((acc: any, item: any) => {
    const subsetDataKeys = Object.keys(item)
    const cleanSubset = subsetDataKeys.reduce((acc, subsetKey) => {
      if (item[subsetKey]) {
        return {
          ...acc,
          [subsetKey]: item[subsetKey],
        }
      } else {
        return acc
      }
    }, {})

    const subsetKey = Object.keys(cleanSubset)[0]

    return {
      ...acc,
      [subsetKey]: cleanSubset[subsetKey as keyof typeof cleanSubset],
    }
  }, {})
}

export const useData = (): {
  resumeData: ResumeData
  siteData: SiteData
} => {
  const query = useStaticQuery(graphql`
    query {
      allSiteDataJson {
        nodes {
          about {
            bio
          }
          contact {
            email
            phone
          }
          links {
            key
            name
            type
            value
          }
          projects {
            desc
            href
            name
          }
        }
      }
      allResumeDataJson {
        nodes {
          contactInfo {
            email
            github
            linkedin
            phone
            website
          }
          education {
            degree
            gradDate
            name
          }
          sideProjects {
            description
            endDate
            link
            name
            startDate
            type
          }
          workExperience {
            accomplishments
            endDate
            name
            position
            startDate
            url
          }
          skills
        }
      }
    }
  `)

  const { allSiteDataJson, allResumeDataJson } = query

  const normalizedSiteData = normalizeData(allSiteDataJson.nodes)

  const normalizedResumeData = normalizeData(allResumeDataJson.nodes)

  return { resumeData: normalizedResumeData, siteData: normalizedSiteData }
}
