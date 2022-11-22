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
    <div>{studentcourse.name}</div>
    
    </>
  )
}

export default StudentCourse