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
  documentCount: number
  savedSearches: {
    [searchId: string]: Search
  }
  updateCurrentSearch: (search: Partial<Search>) => void
  loadSearch: (searchId: string) => void
  saveCurrentSearch: (searchLabel?: string) => void
  clearCurrentSearch: () => void
}

export const useSavedSearchStore = create<Store>(set => {
  const updateCurrentSearch = (search: Partial<Search>) => {
    set(prevState => ({
      ...prevState,
      currentSearch: {
        ...prevState.currentSearch,
        ...search,
      },
    }))
  }

  const loadSearch = (searchId: string) => {
    set(prevState => {
      const savedSearch = prevState.savedSearches[searchId]
      if (savedSearch) {
        return {
          ...prevState,
          currentSearch: savedSearch,
        }
      }
      return prevState
    })
  }

  const saveCurrentSearch = (searchLabel?: string) => {
    set(prevState => {
      return {
        savedSearches: {
          ...prevState.savedSearches,
          [`doc-${prevState.documentCount}`]: {
            ...prevState.currentSearch,
            label: searchLabel ?? `Search #${prevState.documentCount}`,
          },
        },
      }
    })
  }

  const clearCurrentSearch = () => {
    set(prevState => ({
      ...prevState,
      currentSearch: defaultSearch,
    }))
  }

  return {
    currentSearch: defaultSearch,
    documentCount: 0,
    savedSearches: {},
    updateCurrentSearch,
    loadSearch,
    saveCurrentSearch,
    clearCurrentSearch,
  }
})
