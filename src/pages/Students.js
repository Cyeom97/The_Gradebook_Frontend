import StudentCard from '../components/StudentCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Students = () => {

  let navigate = useNavigate()

  const [currentStudentGallery, setStudentGallery] = useState([])
  const [currentGrades, setGrades] = useState([])
  const [allCourses, setAllCourses] = useState([])
  const [newKids, setNewKids] = useState([])
  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  const getLetterGrade = (studentGrade) => {
    if (studentGrade < 4.1 && studentGrade > 3) {
      return 'A'
    }
    if (studentGrade < 3.1 && studentGrade > 2) {
      return 'B'
    }
    if (studentGrade < 2.1 && studentGrade > 1) {
      return 'C'
    }
    if (studentGrade < 1.1 && studentGrade > 0) {
      return 'D'
    }
    if (studentGrade < 1) {
      return 'F'
    }
  }

  useEffect(() => {
    const getAllStudents = async () => {
      let cresponse = await axios.get('http://localhost:3001/courses')
      setAllCourses(cresponse.data)

      let response = await axios.get('http://localhost:3001/students')
      setStudentGallery(response.data)
      console.log('get all students', response.data)
    }

    getAllStudents()
  }, [currentStudentGallery])

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
    window.location.reload(true)
  }

  console.log('current grades ', currentGrades)

  return (
    <div className="students-list">
      <div>
        <h1 id="student-logo">Students</h1>
      </div>

      <form onSubmit={handleSubmit} className="form-type student-form">
        <div className="form-name">
          <label htmlFor="name">Name:</label>
          <input id="name" value={form.name} onChange={handleChange}></input>
        </div>
        <div className="form-email">
          <label htmlFor="email">email:</label>
          <input id="email" value={form.email} onChange={handleChange}></input>
        </div>
        <div className="form-btn">
          <button type="submit" id="student-btn">
            Add Student
          </button>
        </div>
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
            <div className="list">
              <h3 className="student-name">{studentItem.name}</h3>
              <p className="email">{studentItem.email}</p>
              <div>
                {currentFilteredGrade.map((gradeItem) => {
                  const course = allCourses.find((courseItem) => {
                    return courseItem.id === gradeItem.courseId
                  })

                  totalScore += gradeItem.score

                  return (
                    <div
                      className="coursename-score-container"
                      style={{
                        backgroundColor: '#dedede',
                        margin: '5px',
                        padding: '5px'
                      }}
                    >
                      <div className="coursename">
                        course name: {course.name}
                      </div>
                      <div className="score">score: {gradeItem.score} </div>
                    </div>
                  )
                })}
              </div>
              <p className="gpa">
                GPA:
                {totalScore / currentFilteredGrade.length}
              </p>
              <p>
                Letter Grade:
                {getLetterGrade(totalScore / currentFilteredGrade.length)}
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
