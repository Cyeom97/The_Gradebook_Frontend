import StudentCard from '../components/StudentCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const mockData = [
  { name: 'Student1', overallGpa: [4.0, 3.4, 3.7, 3.9] },
  { name: 'Student2', overallGpa: [4.0, 2.9, 3.0, 3.9] },
  { name: 'Student3', overallGpa: [4.0, 3.7, 3.7, 2.4] },
  { name: 'Student4', overallGpa: [3.5, 3.4, 4.0, 3.9] },
  { name: 'Student5', overallGpa: [3.8, 3.4, 3.7, 3.8] },
  { name: 'Student6', overallGpa: [3.0, 3.6, 3.7, 3.9] },
  { name: 'Student7', overallGpa: [3.0, 3.9, 3.8, 3.9] },
  { name: 'Student8', overallGpa: [4.0, 3.4, 3.3, 3.3] },
  { name: 'Student9', overallGpa: [4.0, 3.4, 4.0, 3.2] },
  { name: 'Student10', overallGpa: [3.0, 3.4, 3.3, 3.3] },
  { name: 'Student11', overallGpa: [2.5, 3.4, 3.2, 3.5] },
  { name: 'Student12', overallGpa: [4.0, 3.3, 3.2, 3.6] },
  { name: 'Student13', overallGpa: [3.6, 3.9, 3.1, 3.7] }
]

const Students = () => {
  const [currentStudentGallery, setStudentGallery] = useState()

  useEffect(() => {
    const getAllStudents = async () => {
      let response = await axios.get('http://localhost:3001/')
      setStudentGallery(response.data)
    }
    getAllStudents()
  })

  return (
    <div className="students-list">
      {mockData.map((cardItem) => {
        console.log(cardItem.name)
        return <StudentCard name={cardItem.name} gpa={cardItem.overallGpa} />
      })}
    </div>
  )
}

export default Students
