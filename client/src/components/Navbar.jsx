import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <Link to='/'>WePay</Link>
      {props.currentUser ?
        <>
          <h3>Welcome, {props.currentUser.username}!</h3>
          <button onClick={props.logout}>Log Out</button>
        </>
        :
        <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Sign up</Link>
        </>
      }
      <Link to='/items'>Items</Link>
    </div>
  )
}