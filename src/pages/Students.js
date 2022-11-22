import StudentCard from '../components/StudentCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Students = () => {
  const [currentStudentGallery, setStudentGallery] = useState()

  useEffect(() => {
    const getAllStudents = async () => {
      let response = await axios.get(`http://localhost:3001/students`)
      setStudentGallery(response.data)
    }
    getAllStudents()
  })

  return (
    <div className="students-list">
      {currentStudentGallery.map((cardItem) => {
        console.log(cardItem.name)
        return <StudentCard name={cardItem.name} gpa={cardItem.overallGpa} />
      })}
    </div>
  )
}

export default Students
