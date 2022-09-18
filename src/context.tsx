
import React from "react";


export type AuthContextType = {
    user: string|null;
    setUser: any;
};

interface FCProps {
    children: React.ReactNode;
}

export const AuthContext = React.createContext<AuthContextType>({user: null, setUser: () => null});

const AuthProvider: React.FC<FCProps> = ({ children }) => {
    const [user, setUser] = React.useState<string|null>(null);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
