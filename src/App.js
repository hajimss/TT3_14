import React from 'react';
import Profile from './components/UserInfo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Profile/>
            </div>
        );
    }
}
 
export default App;