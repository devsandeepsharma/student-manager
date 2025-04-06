import { useState } from "react"

import UIContext from "./UIContext"

const UIContextProvider = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const UIContextValues = {
        isModalOpen: isModalOpen,
        openModal: () => {
            setIsModalOpen(true);
        },
        closeModal: () => {
            setIsModalOpen(false);
            setSelectedStudent(null);
        },

        selectedStudent: selectedStudent,
        addSelectedStudent: (student) => {
            setSelectedStudent(student);
        },
    }

    return (
        <UIContext.Provider value={UIContextValues}>
            {props.children}
        </UIContext.Provider>
    )
}

export default UIContextProvider;