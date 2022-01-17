export type BlogPost = {
  id: string
  title: string
  date: Date
  description: string
  path: string
  type: "local" | "remote"
}
