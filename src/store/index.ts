import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import { thunk as thunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
  : compose

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default function configStore () {
  const store = createStore(rootReducer, enhancer)
  return store
}
