import { createStore } from "zustand/vanilla";

type FilterState = {
  searchQuery: string;
  transactionType: "all" | "income" | "expense";
};

type FilterActions = {
  setSearchQuery: (query: string) => void;
  setTransactionType: (type: "all" | "income" | "expense") => void;
};

export const defaultInitialState: FilterState = {
  searchQuery: "",
  transactionType: "all",
}

export type FiltersStore = FilterState & FilterActions

export const initFiltersStore = (): FiltersStore => ({
  ...defaultInitialState,
  setSearchQuery: () => { },
  setTransactionType: () => { },
})

export const createFiltersStore = (initState: FilterState = defaultInitialState) => {
  return createStore<FiltersStore>()((set) => ({
    ...initState,
    searchQuery: "",
    transactionType: "all",
    setSearchQuery: (query) => set({ searchQuery: query }),
    setTransactionType: (type) => set({ transactionType: type }),
  }))
}