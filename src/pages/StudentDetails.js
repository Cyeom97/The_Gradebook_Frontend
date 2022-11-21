const StudentDetails = (props) => {
  return (
    <div className="studentdetails-container">
      <div className="student-name-gpa">
        <h3 className="studentname">Name:{props.name}</h3>
        <p className="studentgpa">GPA:{props.gpa}</p>
      </div>
      <div className="form-container">
        <div className="course-column">
          <h2 className="course-title">Courses</h2>
        </div>
        <div className="grades-column">
          <h2 className="grades-title">Grades</h2>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
