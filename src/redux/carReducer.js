import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

const INITIAL_STATE = {
  cars: [],
  favoritesCars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    filterCars(state, action) {
      state.filter = action.payload;
    },
    addToFavorites(state, action) {
      const car = action.payload;
      state.favoritesCars.push(car);
      localStorage.setItem(
        'favoritesCars',
        JSON.stringify(state.favoritesCars)
      );
    },
    removeFromFavorites(state, action) {
      state.favoritesCars.filter(
        car => car.id !== action.payload
      );
    },
    loadFavoritesFromStorage(state) {
      const favoritesFromStorage = localStorage.getItem('favoritesCars');
      if (favoritesFromStorage) {
        state.favoritesCars = JSON.parse(favoritesFromStorage);
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.pending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(fetchAllCars.rejected),
});

export const carsReducer = carsSlice.reducer;
export const {
  filterCars,
  addToFavorites,
  removeFromFavorites,
  loadFavoritesFromStorage,
} = carsSlice.actions;
