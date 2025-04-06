import { useContext } from "react";

import Button from "./Button";
import UIContext from "../../store/UIContext";
import "./notification.css";

const Notification = () => {

    const {notification, hideNotification} = useContext(UIContext);

    return (
        <div className={`flex-container notification ${notification.status}`}>
            <p className="notification_msg">
                {notification.msg}
            </p>
            <Button className="primary" onClick={hideNotification}>Close</Button>
        </div>
    )
}

export default Notification;