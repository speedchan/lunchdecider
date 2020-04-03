import React, { Component } from 'react';
import './../assets/style/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI(){
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
        Hello.
          <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
