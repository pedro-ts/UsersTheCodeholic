import { createBrowserRouter } from "react-router-dom";
// Pages
import Login from "./assets/views/Login/Login"
import Signup from "./assets/views/Signup/Signup"
import Users from "./assets/views/Users/Users"
import NotFound from "./assets/views/NotFound/NotFound"

const router = createBrowserRouter([
{
    path: '/login',
    element: <Login/>
},
{
    path: '/signup',
    element: <Signup/>
},
{
    path: '/users',
    element: <Users/>
},
{
    path: '*',
    element: <NotFound/>
}

])

export default router;