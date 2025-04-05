import { useState } from "react"

import UIContext from "./UIContext"

const UIContextProvider = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const UIContextValues = {
        isModalOpen: isModalOpen,
        openModal: () => {
            setIsModalOpen(true);
        },
        closeModal: () => {
            setIsModalOpen(false);
        }
    }

    return (
        <UIContext.Provider value={UIContextValues}>
            {props.children}
        </UIContext.Provider>
    )
}

export default UIContextProvider;