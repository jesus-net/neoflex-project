import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@slice/userSlice";
import homeReducer from "@slice/homeSlice";
import postReducer from "@slice/postSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
    post: postReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});
