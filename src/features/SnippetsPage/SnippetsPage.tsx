import React from "react"
import { Header } from "~/components/common/Header"
import { withNewLayout } from "~/components/__legacy__/withLayout"
import { ContentContainer } from "~/components/layout/page"
import { PostItem } from "~/components/post/PostItem"
import { BlogPost } from "~/model/BlogPost"

interface Props {
  snippets: BlogPost[]
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
