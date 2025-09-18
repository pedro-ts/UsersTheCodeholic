import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom"; //renderiza o filho
import "./DefaultLayout.css"
// context
import { useStateContext } from "../../context/ContextProvider";

const DefaultLayout = () => {
  const { user, token } = useStateContext();
  if (!token) {
    //se não tiver token(não logado) ir para login (todos com DefaultLayout)
    return <Navigate to="/login" />;
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>

      <div className="content">
        <header>
          <div>Header</div>
          <div></div>
        </header>

      <main>
      <Outlet />
      </main>

      </div>
    </div>
  );
};

export default DefaultLayout;
