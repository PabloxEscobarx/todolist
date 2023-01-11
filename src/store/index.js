import {createStore, combineReducers} from "redux";
import {reducerTodos} from "./todosState";

const mainReducer = combineReducers({
    todos: reducerTodos,
})
export const store = createStore(mainReducer);