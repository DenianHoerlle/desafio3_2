import React, {useState} from "react";
import {router} from "./Router";
import {RouterProvider} from "react-router-dom";
import Context from "./context";

export default function App() {
    const [user, setUser] = useState("");
    return (
        <Context.Provider value={{user, setUser}}>
            <RouterProvider router={router} />
        </Context.Provider>
    );
}
