import React, { useMemo, useState } from "react"
import { ContentContainer, PageHeader } from "~/components/layout"
import { PostItem } from "~/components/post/PostItem"
import { Snippet } from "~/model/BlogPost"
import uniq from "lodash.uniq"
import { labelMap } from "./config/labelMap"
import { SnippetTag } from "./model/snippetTag"
import { TagsContainer } from "./components/TagsContainer"

interface Props {
  snippets: Snippet[]
}

const SnippetsPage: React.FC<Props> = ({ snippets }) => {
  const [selectedTags, setSelectedTags] = useState<Snippet[]>()

  const allTags: SnippetTag[] = useMemo(() => {
    return uniq(
      snippets.map(snippet => snippet.tags).flatMap(item => item)
    ).map(item => {
      return {
        value: item,
        label: labelMap[item as keyof typeof labelMap] ?? item,
      } as SnippetTag
    })
  }, [snippets])

  return (
    <>
      <div className="mb-4">
        <PageHeader
          title="Snippets"
          additionalText="Code snippets and commonly used configurations"
        />
      </div>
      <TagsContainer
        tags={allTags}
        onTagClick={tag => console.log("tag", tag)}
      />
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

export default SnippetsPage
