import { useContext } from "react"
import { recruiterSearchContext } from "../RecruiterSearchContext"
import {
  formContainerClasses,
  formItemContainer,
  labelClasses,
  formInputClasses,
} from "./classes"

export const SearchForm: React.FC = () => {
  const { form, setFormField } = useContext(recruiterSearchContext)
  return (
    <div className={formContainerClasses}>
      <div className={formItemContainer}>
        <label className={labelClasses}>Country</label>
        <input
          value={form.country}
          onChange={e => setFormField("country", e.target.value)}
          className={formInputClasses}
        />
      </div>
      <div className={formItemContainer}>
        <label className={labelClasses}>Job Title</label>
        <input
          value={form.jobTitle}
          onChange={e => setFormField("jobTitle", e.target.value)}
          className={formInputClasses}
        />
      </div>
      <div className={formItemContainer}>
        <label className={labelClasses}>Location or Keywords to Include</label>
        <input
          value={form.includeKeywords}
          onChange={e => setFormField("includeKeywords", e.target.value)}
          className={formInputClasses}
        />
      </div>
      <div className={formItemContainer}>
        <label className={labelClasses}>Keywords to Exclude</label>
        <input
          value={form.excludeKeywords}
          onChange={e => setFormField("excludeKeywords", e.target.value)}
          className={formInputClasses}
        />
      </div>
      <div className={formItemContainer}>
        <label className={labelClasses}>Education</label>
        <input
          value={form.education}
          onChange={e => setFormField("education", e.target.value)}
          className={formInputClasses}
        />
      </div>
      <div className={formItemContainer}>
        <label className={labelClasses}>Current Employer</label>
        <input
          value={form.currentEmployer}
          onChange={e => setFormField("currentEmployer", e.target.value)}
          className={formInputClasses}
        />
      </div>
    </div>
  )
}
