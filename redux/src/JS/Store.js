import { createStore } from "redux"
import counterReducer from "./Reducer"



const store=createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

export default store