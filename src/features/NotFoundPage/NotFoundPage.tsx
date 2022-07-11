import Link from "next/link"
import React from "react"

const NotFoundPage: React.FC = () => (
  <div className="max-w-2xl h-screen mx-auto">
    <div className="h-1/2 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black leading-loose">404: Page Not Found</h1>
      <Link href="/">
        <a className="text-lg font-bold my-4">Go Home</a>
      </Link>
    </div>
  </div>
)

export default NotFoundPage
