import React, { Component } from 'react';
import logo from './../assets/images/logo.svg';
import './../assets/style/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:3001/testAPI")
    .then(res => {
      return res.text()
    })
    .then(res => {
      this.setState({ apiResponse: res })
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    });
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    return (
      <div className="App">
          <p>{this.state.apiResponse}</p>
      </div>
    );
    
  }

}

export default App;
