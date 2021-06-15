import logo from '../img/logo.png'
import NavItems from './NavItems'

const Nav = () => {
  return (
    <div className="section-bg-blue">
      <div className="container">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <NavItems />
          <button className="nav-button">Request a demo</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
