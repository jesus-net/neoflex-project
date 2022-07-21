import axios from "axios";
import { setClaims, setIsFetching, setTotalCount } from "@slice/homeSlice.js";


export const getClaims = ({search = "", current, limit} = {}) => {
  let API = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  limit = current === 1 ? "" : limit;
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await API.get(`claim?search=${search}&offset=${current}&limit=${limit}`);
    dispatch(setClaims(response.data.claims));
    dispatch(setTotalCount(response.data.totalItems));
  };
};
