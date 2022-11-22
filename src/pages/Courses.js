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
        <>
            <div className='center-align'>
                <h1 id='courses-logo'>
                    Courses
                </h1>
            </div>
            
            <div className="courses-container">
                <div className='the-course-cards'>
                    {courses.map((course) => (
                        <div className='course-box'>
                        {/* <div className="course-name">{course.name}</div> */}
                            <div className='course-name ' onClick={() => chooseCourse(course)}>{course.name} </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Courses