import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='homepage flex-row center-column home-cards'>
            <div className='students-card'>
                <Link to='/students'>Students</Link>
            </div>
            <div className='courses-card'>
                <Link to='/courses'>Courses</Link>
            </div>
        </div>
    )
}

export default Home