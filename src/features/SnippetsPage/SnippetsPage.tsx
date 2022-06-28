import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/layout"
import { ContentContainer } from "~/components/layout/ContentContainer"
import { PostItem } from "~/components/post/PostItem"
import { SnippetMeta } from "~/model/Snippets"

interface Props {
  snippets: SnippetMeta[]
}

const SnippetsPage: React.FC<Props> = ({ snippets }) => (
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

export default withNewLayout(SnippetsPage)
