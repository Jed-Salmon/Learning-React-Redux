import { createStore } from "redux";
import cakeReducer from "./cakeReducer";

// accepts reducer as the parameter
const store = createStore(cakeReducer);

export default store;
