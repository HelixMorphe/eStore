import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    name: null,
    email: null,
    profileImg: null,
    cart: null,
  },
  reducers: {
    updateCart: (state, action) => {
      return {
        ...state,
        cart: action.payload.cart,
      };
    },
    updateUser: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        name: action.payload.name,
        email: action.payload.email,
        profileImg: action.payload.image,
      };
    },
  },
});

export const { updateUser, updateCart } = userSlice.actions;
export default userSlice.reducer;
