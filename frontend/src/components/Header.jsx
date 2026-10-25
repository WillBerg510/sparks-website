import { NavLink } from 'react-router-dom'
import "../stylesheets/Header.css";

function Header() {
  return (
    <header>
      <nav id="navBar">
        <NavLink to="/" className="navLink">Home</NavLink>
        <NavLink to="/about" className="navLink">About</NavLink>
        <NavLink to="/stories" className="navLink">Stories</NavLink>
        <NavLink to="/issues" className="navLink">Issues</NavLink>
      </nav>
    </header>
  )
}

export default Header
