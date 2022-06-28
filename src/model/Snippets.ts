interface MetaBase {
  id: string
  title: string
  description: string
  published: boolean
}

export interface SnippetMetaRaw extends MetaBase {
  tags: string
  slug: string
}

export interface SnippetMeta extends MetaBase {
  tags: string[]
  path: string
}
