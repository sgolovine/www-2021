import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/layout"
import { ContentContainer } from "~/components/layout/ContentContainer"
import { PostItem } from "~/components/post/PostItem"
import { useSnippets } from "~/hooks/useSnippets"

const SnippetsPage: React.FC = () => {
  const snippets = useSnippets()

  return (
    <>
      <div className="mb-4">
        <Header
          title="Snippets"
          additionalText="Code snippets and commonly used configurations"
        />
      </div>
      <ContentContainer>
        {snippets.map(snippet => (
          <PostItem
            key={snippet.id}
            title={snippet.title}
            description={snippet.description}
            path={snippet.path}
          />
        ))}
      </ContentContainer>
    </>
  )
}

export default withNewLayout(SnippetsPage)
