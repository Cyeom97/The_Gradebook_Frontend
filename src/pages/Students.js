import StudentCard from '../components/StudentCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Students = () => {
  const [currentStudentGallery, setStudentGallery] = useState([])
  const [currentGrades, setGrades] = useState([])
  const [newKids, setNewKids] = useState([])
  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    const getAllStudents = async () => {
      let response = await axios.get(`http://localhost:3001/students`)
      setStudentGallery(response.data)
    }
    getAllStudents()
  }, [])

  useEffect(() => {
    const getGrades = async () => {
      let response = await axios.get('http://localhost:3001/grades')
      setGrades(response.data)
    }
    getGrades()
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newStudent = await axios.post('http://localhost:3001/students', form)
    setNewKids([...newKids, newStudent.data])
    setForm({ name: '', email: '' })
  }

  return (
    <div className="students-list">
{/* 
      {currentStudentGallery.map((cardItem) => {
        console.log(cardItem.name)
        return <StudentCard name={cardItem.name} gpa={cardItem.overallGpa} />
      })} */}

      <form onSubmit={handleSubmit} className="form-type">
        <label htmlFor="name">Name:</label>
        <input id="name" value={form.name} onChange={handleChange}></input>
        <label htmlFor="email">email:</label>
        <input id="email" value={form.email} onChange={handleChange}></input>
        <button type="submit">Add Student</button>
      </form>
      {currentGrades.map((student) => (
        <div className='student-card'>
          <h2>Name: {student.pupil.name}</h2>
          <h2>Email: {student.pupil.email}</h2>
          <h2>Course: {student.scores.name}</h2>
          <h3>Grade: {student.score}</h3>
        </div>
      ))}
      {currentStudentGallery.map((mates) =>
        mates.id >= 5 ? (
          <div>
            <h3>{mates.name}</h3>
            <h3>{mates.email}</h3>
          </div>
        ) : (
          <div></div>
        )
      )}

    </div>
  )
}

export default Students
