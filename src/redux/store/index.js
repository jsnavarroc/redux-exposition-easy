// Dependencies
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import  reducers  from '../reducers';

const initState = {
    cities: {'Manizales':'Manizales', 'Pereira':'Pereira'}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initState,
  composeEnhancers(applyMiddleware(thunk))
);
