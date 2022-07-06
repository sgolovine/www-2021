import { SnippetsPage } from "~/features/SnippetsPage"

export default SnippetsPage

export async function getStaticProps() {
  return {
    props: {
      snippets: [],
    },
  }
}
