import { useContext } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import StudentContext from "../../store/StudentContext";
import UIContext from "../../store/UIContext";
import "./students.css";

import { PlusCircle } from "lucide-react";

const Students = () => {

    const {openModal} = useContext(UIContext);
    const {students} = useContext(StudentContext);

    return (
        <div className="students_wrapper">
            <div className="flex-container students_inner">
                <h2 className="students_title">
                    All Students
                </h2>
                <Button 
                    className={"primary"} 
                    icon={<PlusCircle size={18} />}
                    onClick={openModal}
                >
                    Add New Students
                </Button>
            </div>
            <ul className="card_container">
                {
                    students.map(item => (
                        <li key={item.title}>
                            <Card student={item} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Students;