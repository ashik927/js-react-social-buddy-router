import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home'
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';


function App() {
  return (
    <Router>
    <Switch>
    <Route path="/home">
    <Home></Home>
    </Route>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route path="/postDetail/:postDetailId/">
    <PostDetail></PostDetail>
    </Route>
    <Route path="*">
    <NoMatch></NoMatch>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
