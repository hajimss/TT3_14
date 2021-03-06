import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit (e) {
        e.preventDefault();
        const login = async () => {
            const payload = {
                username : this.state.username,
                password : this.state.password
            }
            const response = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", payload, { headers : {'x-api-key' : "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"}})
            console.log(response);
            sessionStorage.setItem("accountKey", response.data.accountKey);
            this.props.history.push({pathname:"/balance", state:{data:response.data}})
        }
        login();
        
    }


    render() { 
        return (
            <div className="container">
                <form className="form-group" onSubmit={this.onFormSubmit}>
                    <label>Username:</label>
                    <input className="form-control" onChange={e => {this.setState({username: e.target.value})}}/>
                    <label>Password:</label>
                    <input className="form-control" type="password" onChange={e => {this.setState({password: e.target.value})}}/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default withRouter(Login);

/* 9myAF6VPFfV2Ljt */