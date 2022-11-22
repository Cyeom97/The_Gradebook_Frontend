import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState([])
  const [students, setStudents] = useState([])
  let { courseId } = useParams()
  const GetCourseDetails = async () => {
    const res = await axios.get(`${BASE_URL}/courses/${courseId}`)
    console.log('coursedetails', res.data)
    setCourseDetails(res.data)
  }

  useEffect(() => {
    GetCourseDetails()
  }, [])

  useEffect(() => {
    const getAllStudents = async () => {
      let response = await axios.get('http://localhost:3001/grades')
      setStudents(response.data)
    }

    getAllStudents()
  }, [])

  return (
    <div className="details-containter">
      <div className="course-details-card">
        <div>{courseDetails.name}</div>
        {students.map((student) =>
          student.courseId === courseId ? (
            <div>
              <h2>{student.pupil.name}</h2>
            </div>
          ) : (
            <div>hi</div>
          )
        )}
      </div>
    </div>
  )
}

export default CourseDetails
