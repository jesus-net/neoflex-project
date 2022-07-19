import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    overlay: "",
    authForm: "",
    regForm: "auth__block--disabled",
  },
  reducers: {
    handleOverlay(state, action) {
        state.navbar = !state.navbar
    }
  },
});

export const { toggleNavbar, setClaims, setIsFetching } = authSlice.actions;

export default authSlice.reducer;
