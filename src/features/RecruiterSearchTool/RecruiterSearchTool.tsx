import classNames from "classnames"

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

const btnClasses = classNames(
  "bg-green-500",
  "p-4",
  "rounded-lg",
  "drop-shadow-lg",
  "font-medium",
  "text-gray-800",
  "hover:bg-green-400",
  "active:drop-shadow-none",
  "w-full",
  "md:w-auto"
)

const RecruiterSearchTool = () => {
  const renderForm = () => {
    return (
      <div className={formContainerClasses}>
        <div className={formItemContainer}>
          <label>Country</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label>Job Title</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label>Location or Keywords to Include</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label>Keywords to Exclude</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label>Education</label>
          <input className={formInputClasses} />
        </div>
        <div className={formItemContainer}>
          <label>Current Employer</label>
          <input className={formInputClasses} />
        </div>
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
      <div className="mt-6 flex flex-col md:flex-row items-center justify-start gap-5">
        <button className={btnClasses}>Search with Google</button>
        <button className={btnClasses}>Save Search</button>
      </div>
    </div>
  )
}

export default RecruiterSearchTool
