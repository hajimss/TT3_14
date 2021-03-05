import React from 'react'

const Profile = () => {

    return (
        <div className="container">
          <header className="">
            <h3>
              <img src="https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL.jpg"/>
            </h3>
          </header>
          <p>
            <strong>Name: Otto Abbott</strong> 
          </p>
          <p>
            <strong>Email: group14@techtrek.com</strong> {}
          </p>
          <p>
            <strong>Age:</strong> {}
          </p>
          <p>
            <strong>Address: 21542 Mertz Square</strong> {}
          </p>
          <p>
            <strong>Phone Number: (+65) 91722941</strong> {}
          </p>
        </div>
    );
}
export default Profile;