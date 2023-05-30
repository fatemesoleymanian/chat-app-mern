import { configureStore } from "@reduxjs/toolkit";
const themeSliceReducer = require("./themeSlice")

 const store = configureStore({
    reducer: {
        themeKey: themeSliceReducer
    }
}
);

export default store;