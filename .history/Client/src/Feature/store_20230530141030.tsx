import { configureStore } from "@reduxjs/toolkit";
const themeSliceReducer = require("./themeSlice")

const store = configureStore({
    reducer: {
        themeKey: themeSliceReducer
    }
}
);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch