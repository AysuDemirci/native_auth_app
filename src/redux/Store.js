import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
});
