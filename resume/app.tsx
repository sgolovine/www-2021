import React from "react"
// import resumeContactInfo from "../static/resumeData/contact-info.json"
import contactInfo from "../static/cms/site-data/contact.json"
import skillsInfo from "../static/cms/resume-data/skills.json"
import educationInfo from "../static/cms/resume-data/education.json"
import sideProjectsInfo from "../static/cms/resume-data/side-projects.json"
import workExperienceInfo from "../static/cms/resume-data/work-experience.json"
import { stripHttp } from "../src/helpers/stripHttp"
import { SectionContainer } from "./components"

function ResumeHeader() {
  return (
    <div className="header-container">
      <h1 className="header">Sunny Golovine</h1>
      <div className="header-link-container">
        <a className="header-link" href={`mailto:${contactInfo.email}`}>
          {contactInfo.email}
        </a>
        <a className="header-link" href={`tel:${contactInfo["phone-number"]}`}>
          {contactInfo["phone-number"]}
        </a>
        <a className="header-link" href={contactInfo.website}>
          {stripHttp(contactInfo.website)}
        </a>
        <a className="header-link" href={contactInfo.linkedin}>
          {stripHttp(contactInfo.linkedin)}
        </a>
        <a className="header-link" href={contactInfo.github}>
          {stripHttp(contactInfo.github)}
        </a>
      </div>
    </div>
  )
}

function ResumeSkills() {
  const { skills } = skillsInfo
  return (
    <SectionContainer headerText="Core Qualifications">
      {skills.map((skill, index) => {
        return (
          <p className="item-content" key={index}>
            {skill}
          </p>
        )
      })}
    </SectionContainer>
  )
}

function WorkExperience() {
  const workExperience = workExperienceInfo["work-experience"]
  return (
    <SectionContainer headerText="Work Experience">
      {workExperience.map((item, index) => {
        return (
          <div key={index}>
            {/* Header */}
            <div className="item-header-container">
              <div>
                <h3 className="item-heading">{item.name}</h3>
                <p className="item-detail">{item.position}</p>
              </div>
              <div className="item-detail text-align-right">
                <p className="item-detail">
                  {item["start-date"]} - {item["end-date"]}
                </p>
                <a className="item-detail item-url " href={item.url}>
                  {stripHttp(item.url)}
                </a>
              </div>
            </div>
            <div className="p-4">
              <ul>
                {item.accomplishments.map((item, index) => {
                  return (
                    <li className="item-content" key={index}>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </SectionContainer>
  )
}

function SideProjects() {
  const sideProjects = sideProjectsInfo["side-projects"]
  return (
    <SectionContainer headerText="Side Projects">
      {sideProjects.map((item, index) => {
        return (
          <div key={index}>
            {/* Header */}
            <div className="item-header-container">
              <div>
                <h3 className="item-heading">{item.name}</h3>
                <p className="item-detail">{item.type}</p>
              </div>
              <div className="text-align-right">
                <p className="item-detail">
                  {item["start-date"]} - {item["end-date"]}
                </p>
                {item.link && (
                  <a className="item-detail item-url" href={item.link}>
                    {stripHttp(item.link)}
                  </a>
                )}
              </div>
            </div>
            <ul>
              <li className="item-content">{item.description}</li>
            </ul>
          </div>
        )
      })}
    </SectionContainer>
  )
}

function Education() {
  const { education } = educationInfo
  return (
    <SectionContainer headerText="Education">
      {education.map((item, index) => {
        return (
          <div key={index}>
            {/* Header */}
            <div className="item-header-container">
              <div>
                <h3 className="item-heading">{item["college-name"]}</h3>
                <p className="item-detail">{item["degree-earned"]}</p>
              </div>
              <div className="text-align-right">
                <p className="item-detail">{item["grad-date"]}</p>
              </div>
            </div>
          </div>
        )
      })}
    </SectionContainer>
  )
}

export function App() {
  return (
    <div className="resume-container">
      <ResumeHeader />
      <ResumeSkills />
      <WorkExperience />
      <SideProjects />
      <Education />
    </div>
  )
}
