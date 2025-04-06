import { useContext } from "react";

import Button from "./Button";
import StudentContext from "../../store/StudentContext";
import UIContext from "../../store/UIContext";
import "./card.css";

import { LocateIcon, Pencil, Phone, Trash2 } from "lucide-react";

const Card = (props) => {

    const {removeStudent} = useContext(StudentContext);
    const {openModal, addSelectedStudent} = useContext(UIContext);

    const handleEdit = (student) => {
        openModal();
        addSelectedStudent(student);
    }

    const handleDelete = (id) => {
        removeStudent(id);
    }

    return (
        <div className="card">
            <h3 className="card_title">{props.student.title}</h3>
            <p className="flex-container card_num">
                <Phone size={16} />
                {props.student.number}
            </p>
            <p className="flex-container card_location">
                <LocateIcon size={16} />
                {props.student.location}
            </p>
            <div className="flex-container btn-container">
                <Button 
                    className="info" 
                    icon={<Pencil size={16} />} 
                    onClick={() => handleEdit(props.student)}
                >
                    Edit
                </Button>
                <Button 
                    className="danger" 
                    icon={<Trash2 size={16} />} 
                    onClick={() => handleDelete(props.student.id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default Card;