import { ReactNode } from "react"
import "./AdminLayout.module.css"

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>
}

export default AdminLayout
