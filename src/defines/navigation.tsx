interface SidebarRoutes {
  key: string
  name: string
  route: string
  enabled: boolean
}

export const sidebarRoutes: SidebarRoutes[] = [
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
    name: "Contact",
    route: "/contact",
    enabled: true,
    key: "contact",
  },
  {
    name: "Guestbook",
    route: "/guestbook",
    enabled: true,
    key: "guestbook",
  },
]
