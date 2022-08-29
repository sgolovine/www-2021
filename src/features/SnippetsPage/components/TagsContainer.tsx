import { SnippetTag } from "../model/snippetTag"

interface Props {
  tags: SnippetTag[]
  activeTag?: SnippetTag
  onTagClick: (tag: SnippetTag) => void
}

export const TagsContainer: React.FC<Props> = ({ tags, onTagClick }) => {
  return (
    <div className="py-4">
      <div className="justify-center flex flex-row items-center flex-wrap gap-5">
        {tags.map(tag => (
          <button
            className="bg-brand-yellow hover:bg-brand-yellow-darker active:bg-brand-yellow-lighter px-2 py-1"
            key={tag.value}
          >
            <p className="text-sm font-bold text-off-black">{tag.label}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
