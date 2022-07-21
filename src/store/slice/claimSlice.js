import { createSlice } from "@reduxjs/toolkit";

const claimSlice = createSlice({
  name: "claim",
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
      type = type.slug;
      state.claim = {title, type, description}
      state.type = {name: action.payload.type.name, slug: action.payload.type.slug};
    }
  },
});

export const {
  setClaim,
} = claimSlice.actions;

export default claimSlice.reducer;
