import Button from "./Button";
import "./card.css";

import { LocateIcon, Pencil, Phone, Trash2 } from "lucide-react";

const Card = (props) => {

    const handleEdit = (student) => {
        console.log(student);
    }

    const handleDelete = (student) => {
        console.log(student);
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
                    onClick={() => handleDelete(props.student)}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default Card;