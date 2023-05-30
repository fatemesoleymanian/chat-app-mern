import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice"

 const store = configureStore({
    reducer: {
        themeKey: themeSliceReducer
    },

}
);

export default store;