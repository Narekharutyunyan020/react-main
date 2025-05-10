
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return <header className="header">
    <div className="container">
      <div className="logoImg">
        <img src="Group 1.png" alt="" />
        <h1 className="logo">START</h1>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><Link to="/services">Services</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

}
export default Header