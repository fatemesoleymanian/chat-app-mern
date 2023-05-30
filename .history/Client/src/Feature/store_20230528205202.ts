import { configureStore } from "@reduxjs/toolkit";
const themeSliceReducer = require("./themeSlice")

export const store = configureStore({
    reducer: {
        themeKey: themeSliceReducer
    }
}
);