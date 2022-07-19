import axios from "axios";
import { setClaims, setIsFetching } from "@slice/homeSlice.js";


export const getClaims = (search) => {
  let API = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await API.get(`/claim?limit=15`);
    dispatch(setClaims(response.data.claims));
  };
};