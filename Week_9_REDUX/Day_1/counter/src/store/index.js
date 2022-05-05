// we import the createStore factory function from Redux. 
import { createStore } from "redux";
import { reducer } from "../reducers";

// set the current day to Monday
const initialState = { value: 0 }

// we invoke and import the function to create the store.
export const store = createStore(reducer, initialState);

