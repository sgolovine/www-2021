import classNames from "classnames"
import { Button } from "~/components/apps/Button"

const formContainerClasses = classNames(
  "my-6",
  "grid",
  "grid-cols-1",
  "md:grid-cols-2",
  "gap-3",
  "md:gap-5"
)
const formItemContainer = classNames("flex", "flex-col")
const formInputClasses = classNames("border", "px-4", "py-2", "rounded-md")
const labelClasses = classNames("text-sm", "font-bold", "text-gray-700")

const RecruiterSearchTool = () => {
  const renderForm = () => {
    return (
      <div className={formContainerClasses}>
        <div className={formItemContainer}>
          <label className={labelClasses}>Country</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label className={labelClasses}>Job Title</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label className={labelClasses}>
            Location or Keywords to Include
          </label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label className={labelClasses}>Keywords to Exclude</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label className={labelClasses}>Education</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label className={labelClasses}>Current Employer</label>
          <input className={formInputClasses} />
        </div>
      </div>
    )
  }

  const renderSearchBox = () => {
    const searchTerm =
      'http://www.google.com/search?q=+"Accountant"+"London" -"Assistant" -intitle:"profiles" -inurl:"dir/+"+site:linkedin.com/in/+OR+site:linkedin.com/pub/+"Current+%2A+Paypal+%2A+"'
    return (
      <div className="mt-4">
        <label className={labelClasses}>Google Search URL</label>
        <input
          value={searchTerm}
          className="my-2 w-full py-2 px-1 text-sm rounded-sm ring-blue-500 ring-2"
        />
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-4 px-2 md:px-0">
      <h1 className="text-center text-xl font-bold">Recruiter Search Tool</h1>
      <p className="text-center pt-2">
        Search for Linkedin profiles on Google.
      </p>
      {renderForm()}
      {renderSearchBox()}
      <div className="mt-6 flex flex-col items-start md:flex-row md:items-center justify-start gap-5">
        <Button title="Search with Google" />
        <Button title="Copy to Clipboard" />
        <Button title="Save Search" />
        <Button secondary title="Clear Search" />
      </div>
    </div>
  )
}

export default RecruiterSearchTool
