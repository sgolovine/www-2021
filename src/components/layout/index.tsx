import React, { ReactNode } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    // Outer Container
    <div className="max-w-3xl mx-auto py-6">
      {/* Header */}
      <div className="text-right py-16">
        <Header />
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </div>

      {/* Primary Content */}
      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="pr-10 hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full px-4 md:px-0">{children}</div>
      </div>
    </div>
  )
}

export default Layout
