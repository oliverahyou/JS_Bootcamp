import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers";

//2.
import { first } from '../middlewares'

//3.
const middlewareEnhancer = applyMiddleware(first)

const initialState = { weekday: "Monday" }

//4.
export const store = createStore(reducer, initialState, middlewareEnhancer);