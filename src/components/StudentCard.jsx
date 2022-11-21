import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentCard = (props) => {
    const navigate = useNavigate()

    const cardHandleClick = () => {
        navigate(`/____/${props.id}`)
    }

    return (
        <ul  onClick={cardHandleClick} className="studentcard-container">
            <li className="studentcard">
                <h3>{props.studentName}</h3>
                <p>{props.overallGpa}</p>
            </li>
        </ul>
    )
}

export default StudentCard