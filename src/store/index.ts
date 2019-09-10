import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const middlewares = [
  thunkMiddleware,
  createLogger({
    level: 'info',
    logger: console,
    collapsed: true
  })
]

export default function configStore () {
  // const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)
  // return createStoreWithMiddleware(rootReducer)
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}