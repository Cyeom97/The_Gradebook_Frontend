import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Students from './pages/Students'
import StudentDetails from './pages/StudentDetails'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import AddStudentForm from './components/AddStudentForm'
import AddCourseForm from './components/AddCourseForm'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/AddStudent" element={<AddStudentForm />} />
          <Route path="/AddCourse" element={<AddCourseForm />} />
          <Route path="/studentcard" element={<StudentCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
