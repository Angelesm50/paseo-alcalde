import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import { authReducer } from '../services/reducers/authReducer';
import { nominaReducer } from '../services/reducers/nominaReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  nomina: nominaReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
