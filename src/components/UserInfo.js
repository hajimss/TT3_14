import React from 'react'

const Profile = () => {

    return (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <img src="https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL.jpg"/>
            </h3>
          </header>
          <p>
            <strong>Name:</strong> {}
          </p>
          <p>
            <strong>Email:</strong> {}
          </p>
          <p>
            <strong>Age:</strong> {}
          </p>
          <p>
            <strong>Address:</strong> {}
          </p>
          <p>
            <strong>Phone Number:</strong> {}
          </p>
        </div>
    );
}
export default Profile;