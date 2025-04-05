import Button from "../UI/Button";
import Card from "../UI/Card";
import "./students.css";

import { PlusCircle } from "lucide-react";

const dummyData = [
    {
        title: "Ramesh",
        location: "Bihar",
        number: 855661656
    },
    {
        title: "Rama Rao",
        location: "Kerala",
        number: 855661656
    },
    {
        title: "Gopal",
        location: "Gujrat",
        number: 855661656
    },
    {
        title: "Ramu",
        location: "Bihar",
        number: 855661656
    },
    {
        title: "Student",
        location: "Punjab",
        number: 855661656
    },
]

const Students = () => {
    return (
        <div className="students_wrapper">
            <div className="flex-container students_inner">
                <h2 className="students_title">
                    All Students
                </h2>
                <Button className={"primary"} icon={<PlusCircle size={18} />}>Add New Students</Button>
            </div>
            <ul className="card_container">
                {
                    dummyData.map(item => (
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