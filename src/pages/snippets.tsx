import React from "react"
import { Header } from "~/components/common/Typography"
import { withMainLayout } from "~/components/layout"
import { PostItem } from "~/components/post/PostItem"
import { useSnippets } from "~/hooks/useSnippets"

const SnippetsPage = () => {
  const snippets = useSnippets()

  return (
    <>
      <div className="mb-4">
        <Header>Snippets</Header>
        <p>Code snippets and commonly used configurations</p>
      </div>
      {snippets.map(snippet => (
        <PostItem
          key={snippet.id}
          title={snippet.title}
          description={snippet.description}
          path={snippet.path}
        />
        // <div className="pb-4">
        //   <Link
        //     className="text-xl text-brand-link hover:text-brand-yellow font-bold"
        //     key={snippet.id}
        //     to={snippet.path}
        //   >
        //     <p>{snippet.title}</p>
        //   </Link>
        //   <p>{snippet.description}</p>
        // </div>
      ))}
    </>
  )
}

// ts-prune-ignore-next
export default withMainLayout(SnippetsPage)
