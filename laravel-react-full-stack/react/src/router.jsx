import { createBrowserRouter } from "react-router-dom";
// Pages
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import Users from "./views/Users/Users"
import NotFound from "./views/NotFound/NotFound"

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