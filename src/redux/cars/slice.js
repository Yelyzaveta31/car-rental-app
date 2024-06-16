import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { fetchCarsThunk } from "./operations";

const initialState = {
  cars: [],
  carBrands: [
    'Lincoln', 'GMC', 'Hyundai', 'MINI', 'Bentley', 'Aston Martin', 'Pontiac',
    'Lamborghini', 'Buick', 'Volvo', 'HUMMER', 'Subaru', 'Mitsubishi', 'Nissan',
    'Mercedes-Benz', 'Audi', 'BMW', 'Chevrolet', 'Chrysler', 'Kia', 'Land Rover',
  ],
  filteredCars: [],
  page: 1,
  limit: 12,
  total: 32,
  favorites: [],
  favoritesId: [],
  isLoading: false,
  isError: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const isFavorite = state.favoritesId.includes(car.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter((favCar) => favCar.id !== car.id);
        state.favoritesId = state.favoritesId.filter((id) => id !== car.id);
        toast.error(`${car.make} successfully deleted from favorites`);
      } else {
        state.favorites.push(car);
        state.favoritesId.push(car.id);
        toast.success(`Successfully added ${car.make} to favorites`);
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
      .addCase(fetchCarsThunk.fulfilled, (state, { payload: { data, page, limit, total } }) => {
        state.page = page;
        state.limit = limit;
        state.total = total;
        state.cars = page === 1 ? data : [...state.cars, ...data];
        state.isLoading = false;
      })
      .addCase(fetchCarsThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      });
  },
});

export const { toggleFavorite, setPage, setFilteredCars, setTotal } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
