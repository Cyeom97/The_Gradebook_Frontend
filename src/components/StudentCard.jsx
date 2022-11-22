import React from 'react'
import { useNavigate } from 'react-router'

const StudentCard = (props) => {

    const navigate = useNavigate()

    const cardHandleClick = () => {
        navigate(`/studentdetails`)
    }

   
    return 
        // <ul  className="studentcard-container">
        //     {/* <li onClick={cardHandleClick} className="studentcard">
        //         <h3 className='student-name'>{props.name}</h3>
        //         <p className='student-gpa'>GPA: {props.gpa}</p>
        //     </li> */}
        //     <div>Hello</div>
        // </ul>
    
}

export default StudentCard