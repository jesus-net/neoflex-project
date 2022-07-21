import axios from "axios";
import { setClaim } from "@slice/claimSlice.js";

export const getClaim = (id) => {
  let API = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  return async (dispatch) => {
    const response = await API.get(`claim/${id}`);
    dispatch(setClaim(response.data));
  };
};
