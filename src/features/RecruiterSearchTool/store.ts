import create from "zustand/react"

type Search = {
  label: string
  country: string | null
  jobTitle: string | null
  locationKeywordsInclude: string | null
  keywordsExclude: string | null
  education: string | null
  currentEmployer: string | null
}

const defaultSearch: Search = {
  label: "Search",
  country: null,
  jobTitle: null,
  locationKeywordsInclude: null,
  keywordsExclude: null,
  education: null,
  currentEmployer: null,
}

interface Store {
  currentSearch: Search
  savedSearches: {
    [searchId: string]: Search
  }
  updateCurrentSearch: (search: Partial<Search>) => void
  loadSearch: (searchId: string) => void
  saveCurrentSearch: (searchLabel?: string) => void
  clearCurrentSearch: () => void
}

export const useSavedSearchStore = create<Store>(set => {
  const updateCurrentSearch = (search: Partial<Search>) => {}
  const loadSearch = (searchId: string) => {}
  const saveCurrentSearch = (searchLabel?: string) => {}
  const clearCurrentSearch = () => {}

  return {
    currentSearch: defaultSearch,
    savedSearches: {},
    updateCurrentSearch,
    loadSearch,
    saveCurrentSearch,
    clearCurrentSearch,
  }
})
