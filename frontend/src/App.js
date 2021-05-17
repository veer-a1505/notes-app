import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import globalStore from './store'
import ProtectedComponent from './components/ProtectedComponent'

function App() {
  return (
    <Provider store={globalStore}>
      <Router>
        <Switch>
          <Route exact path='/' component={Signin}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <ProtectedComponent exact path='/home' component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
