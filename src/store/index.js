import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@store/userSlice";
import homeReducer from "@store/homeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});
