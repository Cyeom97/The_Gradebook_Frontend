import { PROPERTY_TYPES } from '@babel/types'

const StudentDetails = (props) => {
  return (
    <div className="studentdetails-container">
      <div className="tab">
        <h3 className="studentname">Name:={props.name}</h3>
        <p className="studentgpa">GPA:{props.gpa}</p>
      </div>
    </div>
  )
}

export default StudentDetails
