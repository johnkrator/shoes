import {createBrowserRouter} from "react-router-dom";
import SearchResults from "@/components/navbar/SearchResults.tsx";
import Layout from "@/Layout.tsx";
import Home from "@/pages/Home.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";
import About from "@/pages/About.tsx";
import Contact from "@/pages/Contact.tsx";
import Shop from "@/pages/Shop.tsx";
import Cart from "@/pages/cart/Cart.tsx";
import ProductDetails from "@/pages/products/ProductDetails.tsx";
import Favorites from "@/pages/Favorites.tsx";
import ErrorPage from "@/ErrorPage.tsx";
import Profile from "@/pages/users/Profile.tsx";
import PrivateRoute from "@/components/PrivateRoute.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "", element: <Home/>},
                {path: "login", element: <Login/>},
                {path: "register", element: <Register/>},
                {path: "about", element: <About/>},
                {path: "contact", element: <Contact/>},
                {path: "shop", element: <Shop/>},
                {path: "cart", element: <Cart/>},
                {path: "product/:id", element: <ProductDetails/>},
                {path: "favorites", element: <Favorites/>},
                {path: "search", element: <SearchResults/>},

                // Only registered users routes
                {
                    path: "",
                    element: <PrivateRoute/>,
                    children: [
                        {path: "profile", element: <Profile/>},
                    ],
                },
            ],
            errorElement: <ErrorPage/>,
        }
    ]);
};

export default Routes;
