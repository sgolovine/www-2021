import { labelClasses } from "./classes"

export const SearchBox = () => {
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
