import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
