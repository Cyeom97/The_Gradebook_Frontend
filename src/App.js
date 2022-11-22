
import NavBar from './components/NavBar'
import Home from './pages/Home'
// import Students from './pages/Students'
import StudentDetails from './pages/StudentDetails'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import AddStudentForm from './components/AddStudentForm'
import AddCourseForm from './components/AddCourseForm'
import StudentCourse from './pages/StudentCourse'
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [course, setCourse] = useState(null)
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/students" element={<Students />} /> */}
          <Route path="/studentdetails" element={<StudentDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/:courseId" element={<CourseDetails />} />
          <Route path="/AddStudent" element={<AddStudentForm />} />
          <Route path="/courses/create" element={<AddCourseForm />} />
          <Route path="/studentcourses" element={<StudentCourse />} />

        </Routes>
      </main>
    </div>
  )
}

export default App
