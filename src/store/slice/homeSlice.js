import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: false,
    claims: [],
    isFetching: true,
  },
  reducers: {
    toggleNavbar(state, action) {
        state.navbar = action.payload;
    },
    setClaims(state, action) {
      state.isFetching = false;
      state.claims = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    }
  },
});

export const { toggleNavbar, setClaims, setIsFetching } = homeSlice.actions;

export default homeSlice.reducer;
