import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    selectedBrand: null,
  },
  selectors: { selectBrand: state => state.selectedBrand},
  reducers: {
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
  },
});

export const { setSelectedBrand } = filtersSlice.actions;
export const { selectBrand } = filtersSlice.selectors;
export const filtersReducer = filtersSlice.reducer;