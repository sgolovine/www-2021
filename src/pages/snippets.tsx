import { Layout } from "~/components/layout"
import { PageSEO } from "~/components/seo"
import { ContactMeWidget } from "~/features/ContactMeWidget"
import { SnippetsPage } from "~/features/SnippetsPage"
import { convertBlogPosts } from "~/helpers/convertBlogPost"
import { Snippet } from "~/model/BlogPost"
import { getSnippets } from "~/services/api"
import { NextPageWithLayout, StaticProps } from "./_app"

interface Props {
  snippets: Snippet[]
}

const Page: NextPageWithLayout<Props> = (props: Props) => {
  const snippets = convertBlogPosts(props.snippets)

  return (
    <>
      <SnippetsPage snippets={snippets} />
      <ContactMeWidget />
    </>
  )
}

Page.getLayout = page => (
  <>
    <PageSEO pageTitle="Snippets" pagePath="snippets" />
    <Layout pageTitle="Snippets">{page}</Layout>
  </>
)

export const getStaticProps = async (): StaticProps<Props> => {
  const snippets = getSnippets()
  return {
    props: {
      snippets,
    },
  }
}

export default Page
