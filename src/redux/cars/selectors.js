export const selectCars = state => state.cars;
export const selectPage = state => state.page;
export const selectLimit =state => state.limit;
export const selectTotalPage = state => state.totalPage;
export const selectFavorites = state => state.favorites;
export const selectFavoritesId = state => state.cars.favoritesId;
export const  selectIsLoading = state => state.isLoading;
export const  selectIsError= state => state.isError
export const selectQuery = state => state.cars.query;
export const  selectBrands = state => state.carBrands;
export const selectFilteredCars = state => state.filteredCars;
export const selectTotal = state => state.total;