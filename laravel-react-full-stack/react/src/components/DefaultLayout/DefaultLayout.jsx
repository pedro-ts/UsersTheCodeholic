import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom"; //renderiza o filho
import "./DefaultLayout.css"
// context
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";

const DefaultLayout = () => {
  const { user, token, setUser} = useStateContext();
  if (!token) {
    //se não tiver token(não logado) ir para login (todos com DefaultLayout)
    return <Navigate to="/login" />;
  }

  const onLogout = (e) => {
    e.preventDefault();

  }

  useEffect(() =>{
    axiosClient.get('/user')
    .then(({data}) => {
      setUser(data);
    })
  }, [])

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>

      <div className="content">
        <header>
          <div>header</div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className="btn-logout">
              logout
            </a>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
