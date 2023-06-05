import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice(
  {
    name: 'themeSlice',
    initialState: localStorage.getItem('theme') ,
    reducers: {
      toggleTheme: (state) => {
        return (state = !state);
      }
    }
  });
export const { toggleTheme } = themeSlice.actions; export default themeSlice.reducer;