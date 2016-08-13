
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'


const middleware = [logger()]


export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, applyMiddleware(...middleware))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
