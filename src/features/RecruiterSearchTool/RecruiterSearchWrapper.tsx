import { RecruiterSearchContextProvider } from "./RecruiterSearchContext"
import RecruiterSearchTool from "./RecruiterSearchTool"

const Wrapper = () => (
  <RecruiterSearchContextProvider>
    <RecruiterSearchTool />
  </RecruiterSearchContextProvider>
)

export default Wrapper
