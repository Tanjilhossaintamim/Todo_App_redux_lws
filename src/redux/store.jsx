import rootReducer from "./rootReducer";
import { legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = legacy_createStore(rootReducer, composeWithDevTools());
export default store;
