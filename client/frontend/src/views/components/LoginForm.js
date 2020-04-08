import React, { Component } from 'react';

class LoginForm extends Component {
//   constructor(props){
//     super(props);
//   }

  render(){
    return (
      <form action="/login" method="POST">
        <label>
          Email:
          <input type="text" name="name" /><br/>
        </label>
        <label>
          Password:
          <input type="password" name="password" /><br/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;
