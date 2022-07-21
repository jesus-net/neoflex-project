import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: false,
    claims: [],
    isFetching: true,
    startCount: 1,
    limitCount: 10,
    totalCount: 0,
    currentPage: 1,
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
    },
    setStartCount(state, action) {
      state.startCount  = action.payload === 1 ?  action.payload : 1 + (action.payload - 1) * 10;
    },
    setTotalCount(state, action) {
      state.totalCount = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  toggleNavbar,
  setClaims,
  setIsFetching,
  setStartCount,
  setTotalCount,
  setCurrentPage,
} = homeSlice.actions;

export default homeSlice.reducer;
