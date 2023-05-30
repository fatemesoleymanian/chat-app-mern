import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: boolean;
}

const initialState: ThemeState = {
  theme: false,
};

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state = !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;