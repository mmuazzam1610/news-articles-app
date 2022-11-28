import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  isLoggedIn: boolean;
  accesstoken?: string;
  user?: string;
}

interface AuthProps {
  accesstoken: string;
  user: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.accesstoken = undefined;
      state.user = undefined;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action: PayloadAction<AuthProps>) => {
      state.accesstoken = action.payload.accesstoken;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
