import React, { ReactNode, useEffect, useState } from "react"
import { CloseIcon } from "~/icons/Close"
import { Menu } from "~/icons/Menu"
import Header from "./Header"
import Sidebar from "./Sidebar"
import useMedia from "use-media"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const showMobileMenu = useMedia({ maxWidth: "767px" })
  const [mobMenuOpen, setMobMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!showMobileMenu) {
      setMobMenuOpen(false)
    }
  }, [showMobileMenu])

  return (
    // Outer Container
    <div className="max-w-3xl mx-auto py-6">
      <Header />

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
