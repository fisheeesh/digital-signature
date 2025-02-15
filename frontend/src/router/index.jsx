import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Login from "../pages/auth/Login";
import Home from "../pages/auth/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default router;