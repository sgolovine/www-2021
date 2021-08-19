import { Link } from "gatsby"
import React from "react"
import { Header } from "~/components/common/Typography"
import { withMainLayout } from "~/components/layout"
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
        <div className="pb-4">
          <Link
            className="text-xl text-brand-link hover:text-brand-yellow font-bold"
            key={snippet.id}
            to={snippet.path}
          >
            {snippet.title}
          </Link>
        </div>
      ))}
    </>
  )
}

// ts-prune-ignore-next
export default withMainLayout(SnippetsPage)
