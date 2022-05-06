// we import the createStore factory function from Redux. 
import { createStore } from "redux";
import { reducer } from "../reducers";

// set the current number to 0
const initialState = { value: 0 }

// we invoke and import the function to create the store.
export const store = createStore(reducer, initialState);