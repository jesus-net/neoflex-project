import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    messageForm: "",
    loggedIn: false,
    fullName: null,
    isLogin: false,
    token: localStorage.getItem('accessToken'),
    API: () => {
      let currentToken = localStorage.getItem("accessToken");
      console.log(currentToken);
      return axios.create({
        baseURL: "http://localhost:3001/",
        headers: {
          'Authorization': `Bearer ${currentToken}` 
        },
      }) 
    },
  },
  reducers: {
    setToken(state, action) {
      console.log(action.payload)
      state.token = action.payload.token;
      state.fullName = action.payload.fullName;
      localStorage.setItem("accessToken", state.token);
    },
    setUser(state, action) {
      state.loggedIn = action.payload;
    }
  },
});

export const { setToken, setUser } = userSlice.actions;

export default userSlice.reducer;
