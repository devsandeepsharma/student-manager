import { createContext } from "react";

const UIContext = createContext({
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {}
});

export default UIContext;