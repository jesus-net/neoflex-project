import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@slice/userSlice";
import homeReducer from "@slice/homeSlice";
import claimReducer from "@slice/claimSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
    claim: claimReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});
