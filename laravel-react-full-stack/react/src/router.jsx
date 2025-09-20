import { createBrowserRouter, Navigate } from "react-router-dom";
// Pages
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Users from "./views/Users/Users";
import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/NotFound/NotFound";
// Components
import GuestLayout from "./components/GuestLayout/GuestLayout";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import UserForm from "./views/UserForm/UserForm";

const router = createBrowserRouter([
  // Layout padrão
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/users" />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/users/new",
        element: <UserForm key="userCreate"/>
      },
      {
        path: "/users/:id",
        element: <UserForm key="userUpdate"/>
      }
    ],
  },
  // Layout de login ou registro
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  // NotFound
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
