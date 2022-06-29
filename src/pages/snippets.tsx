import { SnippetsPage } from "~/features/SnippetsPage"
import { BlogPost, BlogPostType } from "~/model/BlogPost"
import { getPostMetadata } from "~/services/getPostMetadata"

export default SnippetsPage

export async function getStaticProps() {
  const postMaps = await getPostMetadata()
  const snippets: BlogPost[] = postMaps.snippets.map((snippet, index) => ({
    id: index.toString(),
    title: snippet.title,
    description: snippet.description,
    type: BlogPostType.Local,
    path: `/snippets/snippet/${snippet.slug}`,
  }))

  return {
    props: {
      snippets,
    },
  }
}
