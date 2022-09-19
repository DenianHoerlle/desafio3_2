import {
    createBrowserRouter,
} from "react-router-dom";

import {Home, Login, Search} from "./Pages/index.js";


export const router = createBrowserRouter([
    {
        path: "/Home",
        element: <Home/>,
    },
    {
        path: "*",
        element: <Login/>,
    },
    {
        path: "Search",
        element: <Search/>,
    },
]);