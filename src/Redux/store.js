import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const initState={
    count:0
}

export const store=legacy_createStore(reducer,initState)