import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {



  return (
    <div className="App">



<Router>
<Switch>
  <Route path="/Home">
  <Home></Home>
  </Route>

  <Route path="/friend/:friendId">
<FriendDetail></FriendDetail>
  </Route>

  <Route path="/">
  <Home></Home>
  </Route>

<Route exact path="*" >
<NoMatch></NoMatch>
</Route>
</Switch>

</Router>
    </div>
  );
}

export default App;
