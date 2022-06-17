import React from "react"
import { Header } from "~/components/common/Typography"
import { withMainLayout } from "~/components/layout"
import { PostItem } from "~/components/post/PostItem"
import { useSnippets } from "~/hooks/useSnippets"

const SnippetsPage: React.FC = () => {
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
      ))}
    </>
  )
}

export default withMainLayout(SnippetsPage)
