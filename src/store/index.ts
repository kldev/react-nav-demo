import { combineReducers, createStore } from 'redux';

import { navReducer } from 'store/nav/reducers';

const __rootReducer = combineReducers({
  nav: navReducer
});

export type RootState = ReturnType<typeof __rootReducer>; // create type base on object

export const store = createStore(__rootReducer, {});
