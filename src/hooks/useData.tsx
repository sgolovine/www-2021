import { SiteData } from "~/model/SiteData"

interface RawSiteData {
  bio: string | null
  dev_to: string | null
  email: string | null
  github: string | null
  instagram: string | null
  linkedin: string | null
  phone_number: string | null
  phone_number_alt: string | null
  twitter: string | null
  website: string | null
  work_data:
    | {
        name: string
        description: string
        project_type: "side-project" | "professional"
        show_in_recent_projects: boolean
        url: string | null
      }[]
    | null
}

function normalizeData<T, R>(data: T[]) {
  const normalizedData = data.reduce((acc, item) => {
    const subsetKeys = Object.keys(item)
    const result = subsetKeys.reduce((acc, subsetItem) => {
      const currentItem = item[subsetItem as keyof typeof item]

      if (currentItem) {
        return {
          ...acc,
          [subsetItem]: currentItem,
        }
      }
      return acc
    }, {})

    return {
      ...acc,
      ...result,
    }
  }, {}) as R

  return normalizedData
}

export const useData = () => {
  // Placeholder query data
  const query = {
    allSiteDataJson: {
      nodes: [
        {
          bio: "",
          dev_to: "",
          email: "",

          github: "",
          instagram: "",
          linkedin: "",
          phone_number: "",
          phone_number_alt: "",
          twitter: "",
          website: "",
          work_data: [
            {
              name: "",
              description: "",
              project_type: "side_project" as "side-project",
              show_in_recent_projects: false,
              url: "",
            },
          ],
        },
      ],
    },
  }

  const siteData = normalizeData<RawSiteData, SiteData>(
    query.allSiteDataJson.nodes
  )

  return {
    siteData,
  }
}
