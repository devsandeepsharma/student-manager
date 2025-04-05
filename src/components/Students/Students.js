import { BoxIcon, PlusCircle } from "lucide-react";
import Button from "../UI/Button";
import "./students.css";

const Students = () => {
    return (
        <div className="students_wrapper">
            <div className="flex-container students_inner">
                <h2 className="students_title">
                    All Students
                </h2>
                <Button className={"primary"} icon={<PlusCircle size={18} />}>Add New Students</Button>
            </div>
        </div>
    )
}

export default Students;