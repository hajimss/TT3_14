import React from 'react';
import Login from './components/Login'
import Home from "./components/Home";
import { Route } from "react-router-dom";
import UserInfo from './components/UserInfo'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path='/userinfo'>
                    <UserInfo/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </div>
        );
    }
}
 
export default App;