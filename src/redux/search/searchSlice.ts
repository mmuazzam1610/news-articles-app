import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SearchState {
  history: string[];
}

// Define the initial state using that type
const initialState: SearchState = {
  history: [],
};

export const searchSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    search: (state, action: PayloadAction<string>) => {
      state.history.length === 5
        ? (state.history = [action.payload, ...state.history.slice(1)])
        : (state.history = [action.payload, ...state.history]);
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
