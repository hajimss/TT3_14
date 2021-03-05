import React from 'react';
<<<<<<< HEAD
import Login from './components/Login'
import Home from "./components/Home";
import { Route } from "react-router-dom";
=======
import Profile from './components/UserInfo';
>>>>>>> 0aeca7db4f5494774922b6d6f1cea78f49193480

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
<<<<<<< HEAD
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
=======
                <Profile/>
>>>>>>> 0aeca7db4f5494774922b6d6f1cea78f49193480
            </div>
        );
    }
}
 
export default App;