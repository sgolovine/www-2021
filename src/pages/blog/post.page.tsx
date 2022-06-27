import React from "react"

interface Props {
  testVariable: string
}

const PostPage: React.FC<Props> = props => {
  console.log("props", props)
  return (
    <div>
      <p>Post Page</p>
    </div>
  )
}

export default PostPage
