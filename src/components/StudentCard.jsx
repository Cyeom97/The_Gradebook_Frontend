import React from 'react'
import { useNavigate } from 'react-router'

const StudentCard = (props) => {

    const navigate = useNavigate()

    const cardHandleClick = () => {
        navigate(`/studentdetails`)
    }

   
    return 
    
}

export default StudentCard