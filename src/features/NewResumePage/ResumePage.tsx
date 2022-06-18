import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { withNewLayout } from "~/components/layout"
import { Resume } from "~/model/Resume"

const ResumePage: React.FC = () => {
  const { resumeJson: data } = useStaticQuery<{ resumeJson: Resume }>(
    graphql`
      query NewResumeQuery {
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
    `
  )

  return (
    <div>
      <div>
        <h1 className="text-xl">{data.basics.name}</h1>
        <p className="text-sm pt-2">{data.basics.label}</p>
        <p className="text-sm text-gray-400 pt-1">
          {data.basics.location.city}, {data.basics.location.region}
        </p>
      </div>
      <div className="py-4">
        <h2 className="text-lg">Summary</h2>
        <p>{data.basics.summary}</p>
      </div>
      <div className="py-4">
        <h2 className="text-lg">Work</h2>
      </div>
      <div className="py-4">
        <h2 className="text-lg">Projects</h2>
      </div>
      <div className="py-4">
        <h2 className="text-lg">Education</h2>
      </div>
    </div>
  )
}

export default withNewLayout(ResumePage)
