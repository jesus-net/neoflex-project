import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    claim: {},
    type: {
      name: null,
      slug: null
    }
  },
  reducers: {
    setClaim(state, action) {
      let {title, type, description} = action.payload;
      type = type?.slug;
      state.claim = {title, type, description}
      state.type = {name: action.payload.type?.name, slug: action.payload.type?.slug};
      console.log(state.type, state.claim)
    }
  },
});

export const {
  setClaim,
} = postSlice.actions;

export default postSlice.reducer;
