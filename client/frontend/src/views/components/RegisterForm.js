import React, { Component } from 'react';
const axios = require('axios');

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: '', confirmPassword:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  }

  register(email, password){
    let data = {
      "email": email,
      "password": password,
    }
    axios.post('http://localhost:3001/user/register', data)
    .then(function (response){
      console.log("response from axios:",response);
    })
    .catch(function (error) {
      console.log("error from axios:",error);
    });
  }

  handleSubmit(event){
    
    if(this.state.password === this.state.confirmPassword){

      this.register(this.state.email, this.state.password);
    }
    
    event.preventDefault();
  }

  handleEmailChange(event){
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }
  handleConfirmPasswordChange(event){
    this.setState({confirmPassword: event.target.value});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange}/><br/>
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
        </label>
        <label>
          Confirm Password:
          <input type="password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/><br/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    
    );
  }
}

export default RegisterForm;
