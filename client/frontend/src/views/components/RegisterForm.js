import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: '', confirmPassword:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    (this.state.password==this.state.confirmPassword)?alert('sama'): alert('ee')
    console.log(this.state.email, this.state.password, this.state.confirmPassword);
    event.preventDefault();
  }

  handleChange(event){
    this.setState({email: event.target.email});
    this.setState({password: event.target.password});
    this.setState({confirmPassword: event.target.confirmPassword});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChange}/><br/>
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handleChange}/><br/>
        </label>
        <label>
          Confirm Password:
          <input type="password" value={this.state.confirmPassword} onChange={this.handleChange}/><br/>
        </label>
        <input type="submit" value="Submit" />
        
      </form>
    
    );
  }
}

export default RegisterForm;
