import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk("getCountries", async () => {
    const response = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    // console.log("axios res", axios);
    return response.data;
});

const CountrySlice = createSlice({
    name: "country",
    initialState: {
        loading: false,
        list: [],
        error: ""
    },
    reducers: {
        updateList: (state, action) => {
            state.list = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCountries.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = "";
        });
        builder.addCase(getCountries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCountries.rejected, (state, action) => {
            state.error = action.payload;
        });
    },
});

export const { updateList } = CountrySlice.actions;
export default CountrySlice.reducer;
