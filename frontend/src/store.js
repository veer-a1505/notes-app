import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const userInfoFromStorage = localStorage.getItem('user_Info')
  ? JSON.parse(localStorage.getItem('user_Info'))
  : null

const intitalState = {
  login: { userInfos: userInfoFromStorage },
}

const globalStore = createStore(
  rootReducer,
  intitalState,
  composeEnhancers(applyMiddleware(thunk))
)

export default globalStore
