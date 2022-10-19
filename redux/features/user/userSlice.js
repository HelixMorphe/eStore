import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    name: null,
    email: null,
  },
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
