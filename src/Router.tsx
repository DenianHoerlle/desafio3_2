import {
    createBrowserRouter,
} from "react-router-dom";

import {Home, Login} from "./Pages/index.js";


export const router = createBrowserRouter([
    {
        path: "/Home",
        element: <Home/>,
    },
    {
        path: "*",
        element: <Login/>,
    },
]);