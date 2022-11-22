import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState([])
  let { courseId } = useParams()
  const GetCourseDetails = async () => {
    const res = await axios.get(`${BASE_URL}/courses/${courseId}`)
    console.log('coursedetails', res.data)
    setCourseDetails(res.data)
  }

  useEffect(() => {
    GetCourseDetails()
  }, [])

  return (
    <div className="details-containter">
      <div className="course-details-card">
        <div>{courseDetails.name}</div>
      </div>
    </div>
  )
}

export default CourseDetails
