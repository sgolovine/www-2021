interface SidebarRoute {
  key: string
  name: string
  route: string
  enabled: boolean
}

type SidebarRoutes = SidebarRoute[]

export const sidebarRoutes: SidebarRoutes = [
  { name: "Home", route: "/", enabled: true, key: "home" },
  { name: "Work", route: "/work", enabled: true, key: "work" },
  { name: "Blog", route: "/blog", enabled: true, key: "blog" },
  { name: "Links", route: "/links", enabled: true, key: "links" },
  {
    name: "Resume",
    route: "/resume",
    enabled: true,
    key: "resume",
  },
  {
    name: "Snippets",
    route: "/snippets",
    enabled: true,
    key: "snippets",
  },
].filter(item => item.enabled)
