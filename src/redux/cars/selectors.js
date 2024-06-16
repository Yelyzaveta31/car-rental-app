export const selectCars = (state) => state.cars.cars;
export const selectPage = (state) => state.cars.page;
export const selectLimit = (state) => state.cars.limit;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectIsError = (state) => state.cars.isError;
// export const selectBrand = (state) => state.cars.selectedBrand;
export const selectFilteredCars = (state) => state.cars.filteredCars;
export const selectTotal = (state) => state.cars.total;
// export const selectFavorites = (state) => state.cars.favorites;
export const selectFavoritesId = (state) => state.cars.favoritesId;
export const selectBrands = state => state.cars.carBrands