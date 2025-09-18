import React from 'react'
import {Link} from 'react-router-dom';
const Login = () => {

  const onSubmit = (e) =>{
    e.preventDefault();

  };

  return (
        <form onSubmit={onSubmit}>
          <h1 className='title'>Login into your account</h1>
          <input type="email" placeholder='Email' id="" />
          <input type="password" placeholder='Password' id="" />

          <button className='btn btn-block'>Login</button>
          <p className="message">
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
  )
}

export default Login
