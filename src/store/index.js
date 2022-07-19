import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@slice/userSlice";
import homeReducer from "@slice/homeSlice";

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
