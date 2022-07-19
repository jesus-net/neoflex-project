import axios from "axios";
import { setData, setLocalStorage } from "@store/userSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
let API = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

