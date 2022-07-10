import { SerializeOptions } from "next-mdx-remote/dist/types"
import rehypePrism from "@mapbox/rehype-prism"

export const mdxSerializeOptions: SerializeOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    rehypePlugins: [rehypePrism],
  },
}
