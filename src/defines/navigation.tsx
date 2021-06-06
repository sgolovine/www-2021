export enum Routes {
  Home = "/",
  Blog = "/blog",
  Contact = "/contact",
  Guestbook = "/guestbook",
  Resume = "/resume",
  Links = "/links",
  Work = "/work",
}

export const sidebarRoutes: {
  key: string
  name: string
  route: Routes
  enabled: boolean
}[] = [
  { name: "Home", route: Routes.Home, enabled: true, key: "home" },
  { name: "Work", route: Routes.Work, enabled: true, key: "work" },
  { name: "Blog", route: Routes.Blog, enabled: true, key: "blog" },
  { name: "Links", route: Routes.Links, enabled: true, key: "links" },
  {
    name: "Resume",
    route: Routes.Resume,
    enabled: true,
    key: "resume",
  },
  {
    name: "Contact",
    route: Routes.Contact,
    enabled: true,
    key: "contact",
  },
  {
    name: "Guestbook",
    route: Routes.Guestbook,
    enabled: true,
    key: "guestbook",
  },
]
