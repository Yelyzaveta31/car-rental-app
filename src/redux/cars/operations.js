import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../config/Api";

export const fetchCarsThunk = createAsyncThunk(
    'cars / fetchAll',
    async ({ page = 1, limit = 12 }, thunkApi) => {
      try {
        const { data } = await Api.get('/adverts', {
          params: { page, limit },
        });
        return { data, page, limit };
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        } 
    }
);



