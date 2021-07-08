import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import userReducer from "./userReducer";
import cardReducer from "./cardReducer";
import columnReducer from "./columnReducer";
import modalReducer from "./modalReducer";


const rootReducer = combineReducers({
    card: cardReducer,
    column: columnReducer,
    user: userReducer,
    modal: modalReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))