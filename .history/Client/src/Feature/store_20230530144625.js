import { configureStore } from "@reduxjs/toolkit";
const themeSliceReducer = require("./themeSlice")

export default store = configureStore({
    reducer: {
        themeKey: themeSliceReducer
    }
}
);
