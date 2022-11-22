import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddCourseForm = () => {
    let navigate = useNavigate()
    let { courseId } = useParams()
    const initialFormState = {
        name: ''
    }
    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BASE_URL}/courses/create/${courseId}`, formState)
        setFormState(initialFormState)
        navigate('/courses')
    }

    return (
        <div className='CourseFormContainer'>
            <form onSubmit={handleSubmit}>
                <label className='name' htmlFor='name'>
                    Course Name:
                </label>
                <input
                    className='input'
                    type='text'
                    id='name'
                    value={formState.name}
                    onChange={handleChange}
                />
                <button className='addCourseForm' type='submit'>
                    Add Course
                </button>
            </form>
        </div>
    )
}

export default AddCourseForm