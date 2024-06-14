import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.default.baseUrl = "https://6647292e51e227f23ab14f18.mockapi.io/";

export const fetchCarsThunk = createAsyncThunk(
    "cars/FetchAll",
    async(_, thunkApi) => {
        try {
            const { data } = await axios.get("adverts");
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        } 
    }
);

export const fetchCarsPaginationThunk = createAsyncThunk(
    "cars/FetchCarsPag",
    async({page}, thunkApi) => {
        try {
            const { data } = await axios.get("adverts", {
                params: {
                    limit: 12,
                    page,
                }
            });
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        } 
    }
);



