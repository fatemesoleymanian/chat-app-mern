import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: false,

    reducers: {
        toggleTheme: (state) => {
            return (state = !state);
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;