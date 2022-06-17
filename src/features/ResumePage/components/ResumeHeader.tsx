import React from "react"
import { Button } from "~/components/common/Button"
import { Header } from "~/components/common/Typography"

const ResumePageHeader = () => {
  const handleDownload = () => {
    window.location.replace("/doc/resume.pdf")
  }

  return (
    <div className="flex flex-row justify-between items-center">
      <Header>Resume</Header>
      <Button title="Download PDF" onClick={handleDownload} />
    </div>
  )
}

export default ResumePageHeader
