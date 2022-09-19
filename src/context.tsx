
import React from "react";


export type ContextType = {
    user: string | null;
    setUser: any;
    search: string | null;
    setSearch: any;
};

interface FCProps {
    children: React.ReactNode;
}

export const Context = React.createContext<ContextType>({ user: null, setUser: () => null, search: null, setSearch: () => null });

const Provider: React.FC<FCProps> = ({ children }) => {
    const [user, setUser] = React.useState<string | null>(null);
    const [search, setSearch] = React.useState<string | null>(null);

    return <Context.Provider value={{ user, setUser, search, setSearch }}>{children}</Context.Provider>;
};

export default Provider;
