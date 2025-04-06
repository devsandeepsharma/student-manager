import { useContext, useState } from "react";

import Modal from "../UI/Modal"
import StudentContext from "../../store/StudentContext";
import UIContext from "../../store/UIContext";
import "./addStudent.css";

const AddStudent = () => {

    const {addStudent, updateStudent} = useContext(StudentContext);
    const {closeModal, selectedStudent} = useContext(UIContext);

    const [studentName, setStudentName] = useState(selectedStudent?.title || "");
    const [phone, setPhone] = useState(selectedStudent?.number || "");
    const [location, setLocation] = useState(selectedStudent?.location || "");
    const [error, setError] = useState({
        studentName: "",
        phone: "",
        location: ""
    });

    const submitFormData = () => {
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

        if(selectedStudent) {
            updateStudent({
                "id": selectedStudent.id,
                "title": studentName, 
                "number": phone, 
                "location": location
            })
        } else {
            addStudent({
                "title": studentName, 
                "number": phone, 
                "location": location
            });
        }

        closeModal();
    }

    return (
        <Modal title="Add New Student" btnText={selectedStudent ? "Update Student": "Add Student"} onModalSubmit={submitFormData}>
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