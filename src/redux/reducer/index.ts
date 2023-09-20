import { combineReducers } from "redux";
import addListJobReducer from "./ListJob";
import jobUpdateReducer from "./JobUpdate";
import LoginReducer from "./Login";



export const rootReducer = combineReducers({
    addListJobReducer:addListJobReducer,
    jobUpdateReducer:jobUpdateReducer,
    LoginReducer:LoginReducer
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootReducer