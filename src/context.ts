import { createContext } from "react";

interface ContextType {
    user: string,
    setUser: (user: string) => void,
}

const authContext = createContext<ContextType>(
    
);

export default authContext;