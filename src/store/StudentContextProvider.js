import { useState } from "react"

import StudentContext from "./StudentContext"

const StudentContextProvider = (props) => {

    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents(prev => [...prev, student]);
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

    return (
        <StudentContext.Provider value={studentsContext}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;