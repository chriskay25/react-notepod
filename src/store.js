import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
