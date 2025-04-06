import { useContext, useState } from "react";

import Modal from "../UI/Modal"
import StudentContext from "../../store/StudentContext";
import UIContext from "../../store/UIContext";
import "./addStudent.css";

const AddStudent = () => {

    const {addStudent} = useContext(StudentContext);
    const {closeModal} = useContext(UIContext);

    const [studentName, setStudentName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState({
        studentName: "",
        phone: "",
        location: ""
    });

    const validateFormData = () => {
        const errorObj = {};
        if(studentName === "") {
            errorObj.studentName = "Please write name!";
        }

        if(phone === "") {
            errorObj.phone = "Please write phone number!";
        }

        if(location === "") {
            errorObj.location = "Please write location!";
        }

        setError(errorObj);
    
        if (Object.keys(errorObj).length > 0) return;

        addNewStudent(studentName, phone, location);
    }

    const addNewStudent = (studentName, phone, location) => {
        const id = Math.floor(Math.random() * 6);
        addStudent({
                id, 
                "title": studentName, 
                "number": phone, 
                "location": location
            });
        closeModal();
    }

    return (
        <Modal title="Add New Student" btnText="Add Student" onModalSubmit={validateFormData}>
            <div className="">
                <div className="input_wrapper">
                    <label 
                        className="input_label" 
                        htmlFor="name"
                    >
                        Student Name
                    </label>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Enter Student Name Here.."
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                    />
                    <p className="err-text">{error.studentName && error.studentName}</p>
                </div>
                <div className="input_wrapper">
                    <label 
                        className="input_label" 
                        htmlFor="phone"
                    >
                        Phone Number
                    </label>
                    <input 
                        type="tel"
                        id="phone"
                        placeholder="Enter Phone Number Here.."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <p className="err-text">{error.phone && error.phone}</p>
                </div>
                <div className="input_wrapper">
                    <label 
                        className="input_label" 
                        htmlFor="location"
                    >
                        Location
                    </label>
                    <input 
                        type="text"
                        id="location"
                        placeholder="Enter Location Here.."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <p className="err-text">{error.location && error.location}</p>
                </div>
            </div>
        </Modal>
    )
}

export default AddStudent;