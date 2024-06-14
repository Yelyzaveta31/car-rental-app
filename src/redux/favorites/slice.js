import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      toast.success(`Added ${action.payload.make} to favorites`);
    },
    removeFromFavorites: (state, action) => {
      const removedItem = state.favorites.find((car) => car.id === action.payload);
      state.favorites = state.favorites.filter((car) => car.id !== action.payload);
      const { make } = removedItem;
      toast.error(`${make} was removed from favorites`);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const selectFavorites = (state) => state.favorites.favorites; // Оновлено selectFavorites на state.favorites.favorites
