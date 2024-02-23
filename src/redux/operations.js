import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from 'services/api';

export const fetchAllCars = createAsyncThunk('/car', async (_, thunkApi) => {
  try {
    const result = await getAllCars();

    return result;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
