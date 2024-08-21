import { combineReducers } from "redux";
import propertyReducer from "./property-reducer";

const rootReducer = combineReducers({
  property: propertyReducer,
});

export default rootReducer;
