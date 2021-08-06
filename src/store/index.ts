import AsyncStorage from 'redux-persist/lib/storage';
import {applyMiddleware, compose, createStore, Dispatch, MiddlewareAPI} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {Globalstate} from './ducks/global/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  global: Globalstate;
}

/*ß
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const config = {
  storage: AsyncStorage,
  key: 'rootdata',
  whitelist: ['global']
};

const reducers = persistReducer(config, rootReducer);

const appMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store:any = createStore(reducers, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */