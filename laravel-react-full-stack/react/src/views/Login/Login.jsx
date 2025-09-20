import axiosClient from "../../axios-client";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  // Importação dos set's do contexto
  const { setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    setMessage(null);

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    // Post para o backend usando o axiosClient criado em "../../axiosClient.js"
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        const response = error.response;
        if (response && response.status == 422) {
          setErrors(response.data.errors);
        } else{
          setMessage(response.data.message);
        }
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="title">Login into your account</h1>
      {message && (
        <div className="alert">
          <p>{message}</p>
        </div>
      )}

      {errors && (
        <div className="alert">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}


      <input ref={emailRef} type="email" placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />

      <button className="btn btn-block">Login</button>
      <p className="message">
        Not registered? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  );
};

export default Login;
