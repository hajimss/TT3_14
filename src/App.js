import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Balance from "./components/Balance";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import UserInfo from "./components/UserInfo";
import Logout from "./components/Logout";
import HistoricalPrice from "./components/HistoricalPrice";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/userinfo">
            <UserInfo />
          </Route>
          <Route path="/balance">
            <Balance />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/prices">
            <HistoricalPrice />
          </Route>
          <Route>
            <Logout />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
