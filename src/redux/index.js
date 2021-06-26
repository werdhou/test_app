import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./dataReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers( {
    data: dataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )