import { createContext } from "react";

const UIContext = createContext({
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},

    selectedStudent: null,
    addSelectedStudent: () => {},

    notification: {},
    showNotification: () => {},
    hideNotification: () => {}
});

export default UIContext;