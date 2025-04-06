import { useContext, useEffect, useState } from "react";

import StudentContext from "./StudentContext";
import UIContext from "./UIContext";
import { createStudentOnServer, deleteStudentFromServer, getStudentsFromServer, updateStudentOnServer } from "../services/api";

const StudentContextProvider = (props) => {

    const {showNotification} = useContext(UIContext);

    const [students, setStudents] = useState([]);

    const addStudent = async (student) => {
        showNotification({
            status: "info", 
            msg:"Adding student to the system..."
        })
        try {
            const newStudent = await createStudentOnServer(student);
            setStudents(prev => [...prev, newStudent]); 
            
            showNotification({
                status: "success", 
                msg:"Student added successfully 🎉"
            })
        } catch (error) {
            showNotification({
                status: "error", 
                msg:"Failed to add student. Please try again."
            })
        }
    }

    const removeStudent = async (id) => {
        showNotification({
            status: "info", 
            msg:"Removing student from the system..."
        })

        try {
            await deleteStudentFromServer(id);

            setStudents(prev => {
                const filteredStudents = prev.filter(student => student.id !== id);
                return filteredStudents;
            })

            showNotification({
                status: "success", 
                msg:"Student removed successfully 🗑️"
            })
        } catch (error) {
            showNotification({
                status: "error", 
                msg:"Unable to delete student. Please try again."
            })
        }
    }

    const updateStudent = async (student) => {
        showNotification({
            status: "info", 
            msg:"Updating student details..."
        })

        try {
            await updateStudentOnServer(student);
            setStudents(prev => {
                const currentStudent = prev.findIndex(s => s.id === student.id);
                const updated = [...prev];
                updated[currentStudent] = {
                    ...student
                }
                return updated;
            })

            showNotification({
                status: "success", 
                msg:"Student information updated ✅"
            })
        } catch (error) {
            showNotification({
                status: "error", 
                msg:"Failed to update student. Please retry."
            })
        }
    }

    const studentsContext = {
        students: students,
        addStudent: addStudent,
        removeStudent: removeStudent,
        updateStudent: updateStudent
    }

    useEffect(() => {
        const loadStudents = async () => {
            showNotification({
                status: "info", 
                msg:"Fetching student data..."
            })
    
            try {
                const loadedStudents = await getStudentsFromServer();
                console.log("I'm running");
                setStudents(loadedStudents);
    
                showNotification({
                    status: "success", 
                    msg:"Student list loaded 📄"
                })
            } catch (error) {
                showNotification({
                    status: "error", 
                    msg:"Unable to retrieve student data."
                })
            }
        }

        loadStudents();
    }, [])

    return (
        <StudentContext.Provider value={studentsContext}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;