import React from "react"
import "../src/styles/tailwind.css"
// import "gutenberg-css/dist/gutenberg.min.css"
import resumeContactInfo from "../static/resumeData/contact-info.json"
import resumeEducation from "../static/resumeData/education.json"
import resumeSideProjects from "../static/resumeData/side-projects.json"
import resumeSkills from "../static/resumeData/skills.json"
import resumeWorkExperience from "../static/resumeData/work-experience.json"
import classNames from "classnames"
import { stripHttp } from "../src/helpers/stripHttp"
import { SectionContainer } from "./components"

function ResumeHeader() {
  const { phone, email, website, linkedin, github } =
    resumeContactInfo.contactInfo

  const linkClasses = classNames(
    "text-sm",
    "text-blue-600",
    "hover:underline",
    "px-2"
  )
  return (
    <div className="text-center py-2 pb-12">
      <h1 className="text-xl font-bold leading-loose">Sunny Golovine</h1>
      <div>
        <a className={linkClasses} href={`mailto:${email}`}>
          {email}
        </a>
        <a className={linkClasses} href={`tel:${phone}`}>
          {phone}
        </a>
        <a className={linkClasses} href={website}>
          {stripHttp(website)}
        </a>
        <a className={linkClasses} href={linkedin}>
          {stripHttp(linkedin)}
        </a>
        <a className={linkClasses} href={github}>
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
          <p className="text-sm py-1" key={index}>
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
    <div>
      <h2 className="text-lg font-bold text-center py-4">Work Experience</h2>
      {/* Container */}
      {workExperience.map((item, index) => {
        return (
          <div className="py-2" key={index}>
            {/* Header */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm">{item.position}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">
                  {item.startDate} - {item.endDate}
                </p>
                <a className="text-sm text-blue-600" href={item.url}>
                  {stripHttp(item.url)}
                </a>
              </div>
            </div>
            <div className="p-4">
              <ul>
                {item.accomplishments.map((item, index) => {
                  return (
                    <li className="text-sm py-2" key={index}>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function SideProjects() {
  const { sideProjects } = resumeSideProjects
  return (
    <SectionContainer headerText="Side Projects">
      {sideProjects.map((item, index) => {
        return (
          <div className="py-2" key={index}>
            {/* Header */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm">{item.type}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">
                  {item.startDate} - {item.endDate}
                </p>
                <a className="text-sm text-blue-600" href={item.link}>
                  {stripHttp(item.link)}
                </a>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm">{item.description}</p>
            </div>
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
          <div className="py-2" key={index}>
            {/* Header */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm">{item.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">{item.gradDate}</p>
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
    <div className="max-w-5xl mx-auto">
      <ResumeHeader />
      <ResumeSkills />
      <WorkExperience />
      <SideProjects />
      <Education />
    </div>
  )
}
