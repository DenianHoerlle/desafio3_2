import React, {useState} from "react";
import {router} from "./Router";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "./context";

export default function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}
