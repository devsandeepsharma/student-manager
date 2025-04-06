import { createContext } from "react";

const UIContext = createContext({
    isModalOpen: false,
    selectedStudent: null,
    addSelectedStudent: () => {},
    openModal: () => {},
    closeModal: () => {}
});

export default UIContext;