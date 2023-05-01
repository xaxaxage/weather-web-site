import logo from './logo.jpg'
import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <header>
        <img src={logo} />
        <Link to="/">Home</Link>
        <a target="_blank" href="https://github.com/xaxaxage/weather-web-site">Github</a>
      </header>
      
      <Outlet />
    </>
  )
}

export default Menu