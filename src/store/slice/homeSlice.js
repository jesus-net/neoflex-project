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
    sort: "desc",
    title: "",
    overlay: false
  },
  reducers: {
    toggleNavbar(state, action) {
      state.navbar = action.payload;
    },
    setClaims(state, action) {
      state.isFetching = false;
      state.claims = action.payload.slice(0,10)
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
    setStartCount(state, action) {
      state.startCount  = action.payload === 1 ?  action.payload : (action.payload - 1) * 10;
    },
    setTotalCount(state, action) {
      state.totalCount = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSortData(state, action) {
      state.sort = state.sort === "asc" ? "desc" : "asc";
      state.title = action.payload.title;
    },
    setOverlay(state, action) {
      state.overlay = action.payload;
    }
  },
});

export const {
  toggleNavbar,
  setClaims,
  setIsFetching,
  setStartCount,
  setTotalCount,
  setCurrentPage,
  setSortData,
  setOverlay
} = homeSlice.actions;

export default homeSlice.reducer;
