import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const onSubmit = (e) =>{
    e.preventDefault();

  }
  return (
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for free</h1>
          <input type="text" placeholder="Full Name" id="" />
          <input type="email" placeholder="Email Adress" id="" />
          <input type="password" placeholder="Password" id="" />
          <input type="password" placeholder="Password Confirmation" id="" />

          <button className="btn btn-block">Login</button>
          <p className="message">
            Already registered? <Link to="/login">Sing in</Link>
          </p>
        </form>
  );
}

export default Signup
