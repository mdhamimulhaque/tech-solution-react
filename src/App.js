import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Error from './components/Pages/Error/Error';
import Home from './components/Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route path="/company">
             <Home></Home>
          </Route>
          <Route path="/service">
             <Home></Home>
          </Route>
          <Route path="/projects">
             <Home></Home>
          </Route>
          <Route path="/blog">
             <Home></Home>
          </Route>
          <Route path="/contact">
             <Home></Home>
          </Route>
          <Route path="*">
             <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
