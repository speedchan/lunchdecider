import React, { Component } from 'react';
import './../assets/style/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import About from './About'
import Register from './Register'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:3001/")
    .then(res => {
      return res.text()
    })
    .then(res => {
      console.log(res)
      this.setState({ apiResponse: res })
    })
    .catch(err => {
      console.log("Error fetching data from API: ", err)
    });
  }
  componentDidMount(){
    this.callAPI();
  }

  render(){
    return (
      <div className="App">
          <p>
            {this.state.apiResponse}
          </p>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
              <hr/> 
              {/* A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time */}
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/register">
                    <Register />
                  </Route>
                </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
