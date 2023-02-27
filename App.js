import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Counter from "./Counter";
import reducer from "./reducers";
import { helloSaga } from "./src/saga";
const sagaMiddleware = createSagaMiddleware();
import Counter from "./counter";
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga);
const action = (type) => store.dispatch({ type });

function render() {
  return(
    <Counter
      value={store.getState()}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
   
  );
}
expect default render;
