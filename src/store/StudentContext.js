import { createContext } from "react";

const StudentContext = createContext({
    students: [],
    addStudent: () => {},
    removeStudent: () => {},
    updateStudent: () => {}
})

export default StudentContext;