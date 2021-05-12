import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import globalStore from './store'

function App() {
  return (
    <div>
      <Provider store={globalStore}>
        <Router>
          <Switch>
            <Route exact path='/' component={Signin}></Route>
            <Route exact path='/signup' component={Signup}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
