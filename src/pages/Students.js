import StudentCard from '../components/StudentCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Students = () => {
  const [currentStudentGallery, setStudentGallery] = useState([])
  const [currentGrades, setGrades] = useState([])
  const [allCourses, setAllCourses] = useState([])
  const [newKids, setNewKids] = useState([])
  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    const getAllStudents = async () => {
      let cresponse = await axios.get('http://localhost:3001/courses')
      setAllCourses(cresponse.data)

      let response = await axios.get('http://localhost:3001/students')
      setStudentGallery(response.data)
      console.log('get all students', response.data)
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

  console.log('current grades ', currentGrades)
  //console.log('current student gallery ', currentStudentGallery)

  return (
    <div className="students-list">

      <form onSubmit={handleSubmit} className="form-type">
        <label htmlFor="name">Name:</label>
        <input id="name" value={form.name} onChange={handleChange}></input>
        <label htmlFor="email">email:</label>
        <input id="email" value={form.email} onChange={handleChange}></input>
        <button type="submit">Add Student</button>
      </form>

      <div
        style={{
          backgroundColor: '#efefef',
          width: '100%',
          padding: '1em',
          boxSizing: 'border-box'
        }}
      >
        {currentStudentGallery.map((studentItem) => {
          // filter grades by student id, store in a variable to be reused to iterate score and total GPA
          const currentFilteredGrade = currentGrades.filter((gradeItem) => {
            return gradeItem.studentId === studentItem.id
          })

          let totalScore = 0

          return (
            <div className='list'>
              <h3>{studentItem.name}</h3>
              <p>{studentItem.email}</p>
              <div>
                {currentFilteredGrade.map((gradeItem) => {
                  const course = allCourses.find((courseItem) => {
                    return courseItem.id === gradeItem.courseId
                  })

                  totalScore += gradeItem.score

                  return (
                    <div
                      style={{
                        backgroundColor: '#dedede',
                        margin: '5px',
                        padding: '5px'
                      }}
                    >
                      course name: {course.name} score:
                      {gradeItem.score}
                    </div>
                  )
                })}
              </div>
              <p>
                GPA:
                {totalScore / currentFilteredGrade.length}
              </p>
            </div>
          )
        })}
      </div>

      {/* {currentGrades.map((student) => (
        <div style={{ border: '1px solid red' }}>

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
      )} */}
    </div>
  )
}

export default Students
