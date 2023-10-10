import { applyMiddleware, createStore } from "redux";
import counterReducer from "./Services/Reducers/CounterReducers";
import { todosReducer } from "./Services/Reducers/TodosReducers";
import thunk from "redux-thunk";

export const counterStore = createStore(counterReducer);
export const todosStore = createStore(todosReducer, applyMiddleware(thunk));

