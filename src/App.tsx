import {router} from "./Router";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "./context";
import { GlobalStyle } from "./Components/Style/globalStyle";

export default function App() {
    return (
        <AuthProvider>
            <GlobalStyle/>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}
