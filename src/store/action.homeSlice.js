import axios from "axios";
import { setClaims, setIsFetching } from "@store/homeSlice.js";

let API = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export const getClaims = (search) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await API.get(`/claim`);
    dispatch(setClaims(response.data.claims));
  };
};