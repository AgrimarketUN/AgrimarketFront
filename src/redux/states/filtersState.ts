import { ProductsFilters } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyFiltersState: ProductsFilters = {
  Search: undefined,
  PriceMin: undefined,
  PriceMax: undefined,
  Category: undefined,
  Organic: undefined,
  OrderBy: undefined,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: EmptyFiltersState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFilters: () => EmptyFiltersState,
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;