import logo from './logo.png'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <header>
        <img alt="logo" src={logo} />
        <Link to="/">Home</Link>
        <a target="_blank" href="https://github.com/xaxaxage/weather-web-site">Github</a>
      </header>
    </>
  )
}

export default Menu