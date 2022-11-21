import axios from "axios"
import { BASE_URL} from "../globals"
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"  

const Courses = ( ) => {
    let navigate = useNavigate()
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])

    const chooseCourse = (selected) => {
        setSelectedCourse(selected)
        navigate(`/${selected.id}`)
    }

    const GetCourses = async () => {
        const res = await axios.get(`${BASE_URL}/courses`)
        console.log('courses', res.data)
        setCourses(res.data)
    }

    useEffect(() => {
        GetCourses()
    }, [])

    return(
        <><div>Courses</div><div className="courses-container"></div>
        <div>
            {courses.map((course) => (
                <>
                {/* <div className="course-name">{course.name}</div> */}
                <div onClick={() => chooseCourse(course)}>{course.name} </div></>
            ))}
            </div>
            </>
    )
}

export default Courses