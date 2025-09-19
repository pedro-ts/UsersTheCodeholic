import axiosClient from "../../axios-client"
import { useStateContext } from "../../context/ContextProvider";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  // Como aqui será feito o a criação de conta e login automatico temos que atualizar o contexto que faz a autenticação se o usuario está logado ou não
  // Importação dos set's do contexto
  const {setUser, setToken} = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    // Criamos o payload(o que será enviado para o backend) com os valores que estarão nos inputs
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    // Post para o backend usando o axiosClient criado em "../../axiosClient.js"
    axiosClient.post('/signup', payload)
    .then(({data}) => {
      setUser(data.user)
      setToken(data.token)
    })
    .catch((error) => {
      const response = error.response;
      if(response && response.status == 422){
        console.log(response.data.errors);
        
      }
    })
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="title">Signup for free</h1>
      <input ref={nameRef} type="text" placeholder="Full Name" />
      <input ref={emailRef} type="email" placeholder="Email Adress" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <input
        ref={passwordConfirmationRef}
        type="password"
        placeholder="Password Confirmation"
      />

      <button className="btn btn-block">Login</button>
      <p className="message">
        Already registered? <Link to="/login">Sing in</Link>
      </p>
    </form>
  );
};

export default Signup;
