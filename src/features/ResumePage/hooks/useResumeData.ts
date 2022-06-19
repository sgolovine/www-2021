import { graphql, useStaticQuery } from "gatsby"
import { Resume } from "~/model/Resume"
import { DATE_PRESENT } from "../defines/presentDate"

interface QueryType {
  resumeJson: Resume
}

export const useResumeData = () => {
  const { resumeJson: data } = useStaticQuery<QueryType>(graphql`
    query {
      resumeJson {
        basics {
          email
          image
          label
          location {
            address
            city
            countryCode
            postalCode
            region
          }
          name
          phone
          profiles {
            network
            url
            username
          }
          summary
          url
        }
        education {
          area
          endDate
          institution
          startDate
          studyType
          url
        }
        projects {
          description
          highlights
          keywords
          name
        }
        skills {
          keywords
          level
          name
        }
        work {
          startDate
          endDate
          name
          positions {
            endDate
            startDate
            position
            summary
          }
          startDate
          url
        }
      }
    }
  `)

  const mostRecentEmployment = data.work.filter(
    workItem => workItem.endDate === DATE_PRESENT
  )[0]

  return {
    data,
    mostRecentEmployment,
  }
}
