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
      toast.success(`Successfully added ${action.payload.make} to favorites`);
    },
    removeFromFavorites: (state, action) => {
      const removedItem = state.favorites.find((car) => car.id === action.payload);
      if (removedItem) {
        state.favorites = state.favorites.filter((car) => car.id !== action.payload);
        toast.error(`${removedItem.make} successfully deleted from favorites`);
      } else {
        toast.error(`Item not found in favorites`);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
