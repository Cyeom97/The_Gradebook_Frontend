const mockData = [
  { name: 'Student1', overallGpa: 4 },
  { name: 'Student2', overallGpa: 3 },
  { name: 'Student3', overallGpa: 2 },
  { name: 'Student4', overallGpa: 0 }
]

const Students = () => {
  return (
    <div className="students-list">
      {mockData.map((cardItem) => {
        console.log(cardItem)
        return <StudentCard />
      })}
    </div>
  )
}

export default Students
