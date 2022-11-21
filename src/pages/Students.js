import StudentCard from '../components/StudentCard'

const mockData = [
  { name: 'Student1', overallGpa: 4 },
  { name: 'Student2', overallGpa: 3.8 },
  { name: 'Student3', overallGpa: 2.5 },
  { name: 'Student4', overallGpa: 0 },
  { name: 'Student5', overallGpa: 1.4 },
  { name: 'Student6', overallGpa: 3.3 },
  { name: 'Student7', overallGpa: 2.5 },
  { name: 'Student8', overallGpa: 3.2 },
  { name: 'Student9', overallGpa: 3.9 },
  { name: 'Student10', overallGpa: 2.8 },
  { name: 'Student11', overallGpa: 2.2 },
  { name: 'Student12', overallGpa: 2.9 },
  { name: 'Student13', overallGpa: 3.7 }
]

const Students = () => {
  return (
    <div className="students-list">
      {mockData.map((cardItem) => {
        console.log(cardItem.name)
        return <StudentCard name={cardItem.name} gpa={cardItem.overallGpa} />
      })}
    </div>
  )
}

export default Students
