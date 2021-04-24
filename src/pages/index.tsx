import React, { useEffect } from "react"
import { useData } from "~/hooks/useData"

const HomePage = () => {
  const data = useData()

  useEffect(() => {
    console.log(data)
  }, [data])

  return <p>Page Stub</p>
}

export default HomePage
