import { createPortal } from "react-dom";

import Button from "./Button";
import "./modal.css";

const Modal = ({
    onModalSubmit = ()=> {}, 
    title="Modal Title",
    btnText="Submit",
    children,
    ...props
}) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onModalSubmit();
    }

    const portalElement = document.getElementById("portal");

    return createPortal (
        <>
            <div className="modal_wrapper"></div>
            <form className="modal" onSubmit={handleFormSubmit}>
                <h2>{title}</h2>
                {children}
                <div className="flex-container btn-container">
                    <Button className="secondary">Close</Button>
                    <Button className="primary">{btnText}</Button>
                </div>
            </form>
        </>,
        portalElement
    )
}

export default Modal;