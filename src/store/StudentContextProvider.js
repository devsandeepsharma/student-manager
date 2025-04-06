import { useEffect, useState } from "react"

import StudentContext from "./StudentContext"
import { createStudentOnServer, getStudentsFromServer } from "../services/api";

const StudentContextProvider = (props) => {

    const [students, setStudents] = useState([]);

    const addStudent = async (student) => {
        const newStudent = await createStudentOnServer(student);
        console.log(newStudent)
        setStudents(prev => [...prev, newStudent]);
    }

    const removeStudent = (id) => {
        setStudents(prev => {
            const filteredStudents = prev.filter(student => student.id !== id);

            return filteredStudents;
        })
    }

    const updateStudent = (student) => {
        setStudents(prev => {
            const currentStudent = prev.findIndex(prevStudents => prevStudents.id === student.id);

            const updated = [...prev];
            updated[currentStudent] = {
                ...student
            }

            return updated;
        })
    }

    const studentsContext = {
        students: students,
        addStudent: addStudent,
        removeStudent: removeStudent,
        updateStudent: updateStudent
    }

    useEffect(() => {
        const loadStudents = async () => {
            const loadedStudents = await getStudentsFromServer();
            console.log("I'm running");
            setStudents(loadedStudents);
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