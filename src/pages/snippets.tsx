import { SnippetsPage } from "~/features/SnippetsPage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { RawBlogPost } from "~/model/BlogPost"
import { getSnippets } from "~/services/api"

interface Props {
  snippets: RawBlogPost[]
}

export default (props: Props) => {
  const snippets = convertBlogPosts(props.snippets)

  return <SnippetsPage snippets={snippets} />
}

export async function getStaticProps() {
  const snippets = getSnippets()
  return {
    props: {
      snippets,
    },
  }
}
