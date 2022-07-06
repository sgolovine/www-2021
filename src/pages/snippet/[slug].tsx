import { useRouter } from "next/router"

const SnippetPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <p>Snippet Page</p>
      <p>Slug: {slug}</p>
    </div>
  )
}

export default SnippetPage
