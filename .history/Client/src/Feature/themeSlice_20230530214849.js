import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice(
  {
    name: 'themeSlice',
    initialState: JSON.parse(localStorage.getItem('mm')) | true,
    reducers: {
      toggleTheme: (state) => {
        localStorage.setItem('mm',false)
        return (state = !state);
      }
    }
  });
export const { toggleTheme } = themeSlice.actions; export default themeSlice.reducer;