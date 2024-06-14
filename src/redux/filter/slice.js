import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    selectedBrand: null,
  },
  reducers: {
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
  },
});

export const { setSelectedBrand } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const { selectBrand } = filtersSlice.selectors;