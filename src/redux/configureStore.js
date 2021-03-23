import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import champion from "./modules/champion";
import { createBrowserHistory } from "history";
import  { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';

const env = process.env.NODE_ENV;

const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)];

if(env === 'development') {
  middlewares.push(logger);
}

const reducer = combineReducers({
  champion,
  routing: routerReducer,
});

let store;

if (env === "development") {
  store = initialState =>
    createStore(reducer,
    composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();