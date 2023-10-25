import { useState } from "react";
import StudentsPage from "./Students";

function TeacherPage() {

    const [showStudentsNoText, setShowStudentsNoText] = useState(false);

    function handleToggleText(){
        
        setShowStudentsNoText(!showStudentsNoText)
    }

    //console.log(showStudentsNoText);

    return (
        <div>
            <h3>Teacher List Page</h3>
            <button onClick={handleToggleText}>Toggle Students No Text</button>
            <StudentsPage showStudentsNoText={showStudentsNoText}/>

        </div>
    )
}

export default TeacherPage;