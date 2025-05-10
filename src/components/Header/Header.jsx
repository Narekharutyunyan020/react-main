
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
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

}
export default Header