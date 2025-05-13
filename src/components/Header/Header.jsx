
import { Link } from "react-router-dom"
import "./Header.css"
import Menuicons from "../../icons/menuicons"
import { useState } from "react"

function Header() {
  const [menuState, setMenuState] = useState(false)

  return <header className="header">
    <div className="container">
      <div className="logoImg">
        <img src="Group 1.png" alt="" />
        <h1 className="logo">START</h1>
      </div>

      <nav>

        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className="btn" onClick={() => setMenuState(!menuState)}>
        <Menuicons size={40} color="white" />
      </button>


      <div style={{ left: menuState ? '0' : '-100%' }} className="menuBlock">

        <nav>
          <div className="mobailMenuLogo">
            <img src="Group 1.png" className="mobailLogo" alt="" />
            <h1 className="logo">START</h1>
          </div>

          <ul className="nav-links-mobail">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

      </div>

    </div>
  </header>

}
export default Header
