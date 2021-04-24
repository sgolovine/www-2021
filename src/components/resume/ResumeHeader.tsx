import React from "react"
import { Button } from "../Button"
import { Header } from "../Typography"
import { navigate } from "gatsby"

const ResumePageHeader = () => {
  // const handlePrint = () => navigate("/resume/print")

  const handleDownload = () => navigate("/doc/resume.pdf")

  return (
    <div className="flex flex-row justify-between items-center">
      <Header>Resume</Header>
      <Button title="Download PDF" onClick={handleDownload} />
    </div>
  )
}

export default ResumePageHeader
