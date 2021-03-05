import React from 'react';

const Logout = () => {
    sessionStorage.removeItem('accountKey')
    return (
        <div>
            <p>You have been logged out</p>
        </div>
    );
}

export default Logout;