import { useState } from "react"

import UIContext from "./UIContext"

const UIContextProvider = (props) => {

    const intialNotificationState = {
        showNotification: false,
        status: null,
        msg: null
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [notification, setNotification] = useState(intialNotificationState);

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

        notification: notification,
        showNotification: (data) => {
            setNotification({
                showNotification: true,
                status: data.status,
                msg: data.msg
            });
        },
        hideNotification: () => {
            setNotification({
                showNotification: false,
                status: null,
                msg: null
            });
        }
    }

    return (
        <UIContext.Provider value={UIContextValues}>
            {props.children}
        </UIContext.Provider>
    )
}

export default UIContextProvider;