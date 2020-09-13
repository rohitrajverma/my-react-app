import { combineReducers } from "redux";
import currencyReducer from "./currency-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    currency: currencyReducer,
    userSession: userReducer
});

export default rootReducer;