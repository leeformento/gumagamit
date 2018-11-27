import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import Users from './users/Users';
import Signin from './auth/Signin';

const Home = props => {
  return (
    <div>
      <h1> Home </h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" exact>Home</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/signin">Sign In</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.signout}>Sign Out</button>
          </nav>
          <main>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={Users} />
          <Route path="/signin" component={Signin} />
          
          </main>
        </header>
      </div>
    );
  }
  signout = () => {
  
    localStorage.removeItem('jwt');
  }
}

// whitelist: keep list of valid tokens on the server (db)
// blacklist: keep list of blacklisted tokens 
// access token short lived + refresh token (long lived)


export default App;
