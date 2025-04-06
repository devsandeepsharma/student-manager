const baseURL = "https://student-manager-ddb31-default-rtdb.firebaseio.com";

export const getStudentsFromServer = async () => {
    try {
        const res = await fetch(`${baseURL}/student.json`)

        if(!res.ok) {
            throw new Error("retriving Student failed");
        }

        const students = await res.json();

        const loadedStudents = [];

        for(const key in students) {
            loadedStudents.push({
                id: key,
                ...students[key]
            })
        }

        return loadedStudents;
    } catch (error) {
        console.log(error.message);
    }
}

export const createStudentOnServer = async (student) => {
    try {
        const res = await fetch(
            `${baseURL}/student.json`, 
        {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!res.ok) {
            throw new Error("Adding Student failed");
        }

        const newStudentId = await res.json();

        return {...student, id: newStudentId.name};
    } catch (error) {
        console.log(error.message);
    }
}
