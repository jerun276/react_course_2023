function StudentsPage(props) {

    const { showStudentsNoText } = props;
    return (
        <div>
            <h4>Students List Page</h4>
            {showStudentsNoText ? (
                <p>The no of students in this class is 100</p>
            ) : <p>No students</p>}
        </div>
    )
}

export default StudentsPage;