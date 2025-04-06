import { useContext, useEffect } from "react";

import Button from "./Button";
import UIContext from "../../store/UIContext";
import "./notification.css";

const Notification = () => {

    const {notification, hideNotification} = useContext(UIContext);

    useEffect(() => {
        if (!notification.showNotification) return;

        const timer = setTimeout(() => {
            hideNotification();
        }, 2000);
    
        return () => {
            clearTimeout(timer);
        };
    }, [notification])

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