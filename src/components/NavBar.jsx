import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

    const logoHandleClick = () => {
        navigate('/')
    }


    const nav = (
        <nav className='flex-row-links'>
            <Link to='/'>Home</Link>
        </nav>
    )

    return (
        <header id="header">
            <nav className='flex-row nav-links'>
                <div>
                    <h1 onClick={logoHandleClick} id='nav-logo'>gradebook</h1>
                </div>
                <div className='center-column flex-row'>
                    <Link to='/'>Home</Link>
                    <Link to='/students'>Students</Link>
                    <Link to='/courses'>Courses</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
