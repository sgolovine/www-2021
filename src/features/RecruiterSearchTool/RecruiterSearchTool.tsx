import { Button } from "~/components/apps/Button"
import { SearchForm } from "./components/SearchForm"
import { SavedSearches } from "./components/SavedSearches"
import { SearchBox } from "./components/SearchBox"

const RecruiterSearchTool = () => {
  return (
    <div className="max-w-4xl mx-auto py-4 px-2 md:px-0">
      <h1 className="text-center text-xl font-bold">Recruiter Search Tool</h1>
      <p className="text-center pt-2">
        Search for Linkedin profiles on Google.
      </p>
      <SavedSearches />
      <SearchForm />
      <SearchBox />
      <div className="mt-6 flex flex-col items-start md:flex-row md:items-center justify-start gap-5">
        <Button title="Search with Google" />
        <Button title="Copy to Clipboard" />
        {/* <Button title="Save Search" /> */}
        <Button secondary title="Clear Search" />
      </div>
    </div>
  )
}

export default RecruiterSearchTool
