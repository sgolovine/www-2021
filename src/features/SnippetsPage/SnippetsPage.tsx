import React from "react"
import { ContentContainer, PageHeader } from "~/components/layout"
import { PostItem } from "~/components/post/PostItem"
import { BlogPost } from "~/model/BlogPost"

interface Props {
  snippets: BlogPost[]
}

const SnippetsPage: React.FC<Props> = ({ snippets }) => (
  <>
    <div className="mb-4">
      <PageHeader
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

export default SnippetsPage
