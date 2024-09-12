import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    parts: ["head", "torso"],
  },
  reducers: {
    addParts: (state, action) => {
      const newParts = action.payload.filter(part => !state.parts.includes(part));
      if (newParts.length > 0) {
        state.parts = [...state.parts, ...newParts];
      }
    },
  },
});

export const { addParts } = userSlice.actions;

export default userSlice.reducer;
