import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import Provider from "./context";
import { GlobalStyle } from "./Components/Style/globalStyle";

export default function App() {
    return (
        <Provider>
            <GlobalStyle />
            <RouterProvider router={router} />
        </Provider>
    );
}
