import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "../modules/loginSlice";
import signupReducer from "../modules/signupSlice";
import postReducer from "../modules/postSlice";
import commentReducer from "../modules/commentSlice";

const middlewares = [thunk];
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  post: postReducer,
  comment: commentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
