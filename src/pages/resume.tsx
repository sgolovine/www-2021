import axios from "axios"
import { ResumePage } from "~/features/ResumePage"

export default ResumePage

export async function getStaticProps() {
  const resume = await axios.get("/resume/resume.json")

  return {
    props: {
      data: resume.data,
    },
  }
}
