import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("acctress/fetchData", async () => {
  const url =
    "https://raw.githubusercontent.com/nghiatran1998/japanese-acctress-db/main/acctress.json";
  const response = await axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  return response.data;
});

const acctressSlice = createSlice({
  name: "acctress",
  initialState: {
    list: [],
    acctress: {},
  },
  reducers: {
    getAcctress(state, action) {
      state.acctress = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { getAcctress } = acctressSlice.actions;
export default acctressSlice.reducer;
