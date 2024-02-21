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
export const { filterCars } = carsSlice.actions;