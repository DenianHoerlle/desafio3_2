
import React from "react";


export type ContextType = {
    user: string | null;
    setUser: any;
    search: string | null;
    setSearch: any;
    // Criar os types novos
};

interface FCProps {
    children: React.ReactNode;
}

// Criar os types novos
export const Context = React.createContext<ContextType>({ user: null, setUser: () => null, search: null, setSearch: () => null });

const Provider: React.FC<FCProps> = ({ children }) => {
    const [user, setUser] = React.useState<string | null>(null);
    const [search, setSearch] = React.useState<string | null>(null);
    const [showModal, setShowModal] = React.useState<string | null>(null);
    const [modalDescription, setModalDescription] = React.useState<string | null>(null);

    return <>
        {/* Adicionar o componente de modal aqui */}
        {/* <Modal
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {...Conteudo}
      </Modal> */}
        <Context.Provider value={{ user, setUser, search, setSearch, showModal, setShowModal, modalDescription, setModalDescription }}>{children}</Context.Provider>;
    </>;
};

export default Provider;
