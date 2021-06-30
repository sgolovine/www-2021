import React, { ReactNode } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import SEO from "~/components/common/SEO"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <SEO />
    <div className="max-w-3xl mx-auto py-6">
      <Header />

      <div className="flex flex-row">
        <div className="pr-10 hidden md:block">
          <Sidebar />
        </div>

        <div className="w-full px-4 md:px-0">{children}</div>
      </div>
    </div>
  </>
)

export default Layout
