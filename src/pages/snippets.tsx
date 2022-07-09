import { Layout } from "~/components/layout"
import { SnippetsPage } from "~/features/SnippetsPage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { RawBlogPost } from "~/model/BlogPost"
import { getSnippets } from "~/services/api"
import { NextPageWithLayout, StaticProps } from "./_app"

interface Props {
  snippets: RawBlogPost[]
}

const Page: NextPageWithLayout<Props> = (props: Props) => {
  const snippets = convertBlogPosts(props.snippets)

  return <SnippetsPage snippets={snippets} />
}

Page.getLayout = page => <Layout pageTitle="Snippets">{page}</Layout>

export const getStaticProps = async (): StaticProps<Props> => {
  const snippets = getSnippets()
  return {
    props: {
      snippets,
    },
  }
}

export default Page
