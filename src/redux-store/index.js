import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { persistStore } from 'redux-persist';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import reducers from './reducers';

const middlewares = compose(
  applyMiddleware(
    promise(),
    thunk
  ),
  offline(offlineConfig)
)

export const store = createStore(reducers, middlewares)
export const persistor = persistStore(store)
