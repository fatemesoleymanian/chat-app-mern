import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: boolean;
}

const initialState: ThemeState = {
  theme: true,
};

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;