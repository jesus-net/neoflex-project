import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    fullName: localStorage.getItem("nickname"),
    token: localStorage.getItem('accessToken'),
    role: localStorage.getItem("role"),
    API: () => {
      let currentToken = localStorage.getItem("accessToken");
      return axios.create({
        baseURL: "http://localhost:3001/",
        headers: {
          'Authorization': `Bearer ${currentToken}` 
        },
      }) 
    },
  },
  reducers: {
    setLocalStorage(state, action) {
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
      state.role = action.payload.role;
      localStorage.setItem("nickname", action.payload.fullName);
      localStorage.setItem("accessToken", action.payload.token);
      localStorage.setItem("role", action.payload.role);
    },
    ClearLocalStorage(state, action) {
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
      state.role = action.payload.role;
      localStorage.removeItem("nickname");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("role");
    }
  },
});

export const { setLocalStorage, ClearLocalStorage} = userSlice.actions;

export default userSlice.reducer;
