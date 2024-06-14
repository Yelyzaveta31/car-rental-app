import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCarsPaginationThunk, fetchCarsThunk } from "./operations";

const initialState = {
  cars: [],
  carBrands: [],
  filteredCars: [],
  page: 1,
  limit: 12,
  totalPage: 32,
  favorites: [],
  favoritesId: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const isFavorite = state.favoritesId.includes(car.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter((favCar) => favCar.id !== car.id);
        state.favoritesId = state.favoritesId.filter((id) => id !== car.id);
      } else {
        state.favorites.push(car);
        state.favoritesId.push(car.id);
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload: { data, page, limit } }) => {
        state.page = page;
        state.limit = limit;
        state.cars = page === 1 ? data : [...state.cars, ...data];
        state.isLoading = false;
      })
      .addCase(fetchCarsPaginationThunk.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
      })
      .addMatcher(
        isAnyOf(fetchCarsPaginationThunk.pending, fetchCarsThunk.pending),
        (state) => {
          state.isError = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsPaginationThunk.rejected, fetchCarsThunk.rejected),
        (state) => {
          state.isError = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsPaginationThunk.fulfilled, fetchCarsThunk.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { toggleFavorite, setPage,  setFilteredCars, setTotal } = slice.actions;
export const carsReducer = slice.reducer;
