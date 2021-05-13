import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer.js'

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

export default globalStore
