import axios from "axios"
import { BASE_URL } from "../globals"
import {useState, useEffect} from 'react'


const StudentCourse = () => {

  const [studentcourse, setStudentCourse] = useState([])

  const GetStudentCourse = async () => {
    const res = await axios.get(`${BASE_URL}/studentcourses`)
    setStudentCourse(res.data)
  }

  useEffect(() => {
    GetStudentCourse()
  }, [])

  return (
    <><div>studentcourse</div>
    <div>{studentcourse.map((studentcourse) => (
      <><div className="studentcourse-box" key={studentcourse.id}>
        studentId: {studentcourse.studentId}
      </div><div>
          courseId: {studentcourse.courseId}
        </div></>
    ))}
    </div>
    
    </>
  )
}

export default StudentCourse