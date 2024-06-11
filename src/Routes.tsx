import Home from "@/pages/Home.tsx";
import {createBrowserRouter} from "react-router-dom";
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";
import Layout from "@/Layout.tsx";
import ErrorPage from "@/ErrorPage.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "", element: <Home/>},
                {path: "login", element: <Login/>},
                {path: "register", element: <Register/>}
            ],
            errorElement: <ErrorPage/>,
        }
    ]);
};

export default Routes;
