import { useContext } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";
import UIContext from "../../store/UIContext";
import "./modal.css";

const Modal = ({
    onModalSubmit = ()=> {}, 
    title="Modal Title",
    btnText="Submit",
    children,
    ...props
}) => {

    const {closeModal} = useContext(UIContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onModalSubmit();
        closeModal();
    }

    const portalElement = document.getElementById("portal");

    return createPortal (
        <>
            <div className="modal_wrapper" onClick={closeModal}></div>
            <form className="modal" onSubmit={handleFormSubmit}>
                <h2>{title}</h2>
                {children}
                <div className="flex-container btn-container">
                    <Button className="secondary" onClick={closeModal}>Close</Button>
                    <Button className="primary" type="submit">{btnText}</Button>
                </div>
            </form>
        </>,
        portalElement
    )
}

export default Modal;