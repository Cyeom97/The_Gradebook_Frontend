const StudentDetails = (props) => {
  return (
    <div className="studentdetails-container">
      <div className="student-name-gpa">
        <h3 className="studentname">Name:{props.name}</h3>
        <p className="studentgpa">GPA:{props.gpa}</p>
      </div>
      <div className="form-container">
        <div className="column">
          <h2 className="courses-title">Courses</h2>
          <div className="row">Psychology</div>
          <div className="row">Literature</div>
          <div className="row">Algebra</div>
          <div className="row">Humanities</div>
        </div>
        <div className="column">
          <h2 className="grades-title">Grades</h2>
          <div className="row">4.0</div>
          <div className="row">3.8</div>
          <div className="row">3.5</div>
          <div className="row">3.9</div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
