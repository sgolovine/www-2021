import React from "react"
import resumeContactInfo from "../static/resumeData/contact-info.json"
import resumeEducation from "../static/resumeData/education.json"
import resumeSideProjects from "../static/resumeData/side-projects.json"
import resumeSkills from "../static/resumeData/skills.json"
import resumeWorkExperience from "../static/resumeData/work-experience.json"
import { stripHttp } from "../src/helpers/stripHttp"
import { SectionContainer } from "./components"

function ResumeHeader() {
  const { phone, email, website, linkedin, github } =
    resumeContactInfo.contactInfo

  return (
    <div className="header-container">
      <h1 className="header">Sunny Golovine</h1>
      <div className="header-link-container">
        <a className="header-link" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="header-link" href={`tel:${phone}`}>
          {phone}
        </a>
        <a className="header-link" href={website}>
          {stripHttp(website)}
        </a>
        <a className="header-link" href={linkedin}>
          {stripHttp(linkedin)}
        </a>
        <a className="header-link" href={github}>
          {stripHttp(github)}
        </a>
      </div>
    </div>
  )
}

function ResumeSkills() {
  const { skills } = resumeSkills
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
  const { workExperience } = resumeWorkExperience
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
                  {item.startDate} - {item.endDate}
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
  const { sideProjects } = resumeSideProjects
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
                  {item.startDate} - {item.endDate}
                </p>
                <a className="item-detail item-url" href={item.link}>
                  {stripHttp(item.link)}
                </a>
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
  const { education } = resumeEducation
  return (
    <SectionContainer headerText="Education">
      {education.map((item, index) => {
        return (
          <div key={index}>
            {/* Header */}
            <div className="item-header-container">
              <div>
                <h3 className="item-heading">{item.name}</h3>
                <p className="item-detail">{item.degree}</p>
              </div>
              <div className="text-align-right">
                <p className="item-detail">{item.gradDate}</p>
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
