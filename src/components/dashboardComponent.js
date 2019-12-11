import React from 'react';
import auth from './../utils/auth';

class dashboardComponent extends React.Component {
  
  logOut = () => {
    auth.signout();
    this.props.history.push('/login');
  }
  render() {
    return (
      <div className="col text-center">
        <p>You have successfully logged in</p>
        <button onClick={this.logOut}>Logout</button>
      </div>
    )
  }
}

export default dashboardComponent;
