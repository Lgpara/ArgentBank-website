import Logo from "../../../appdata/images/argentBankLogo.png"
import { NavLink, useNavigate } from "react-router-dom"
import getToken from "./../../scripts/index.js"
import { useSelector } from "react-redux";


function Header() {
  const user = useSelector((state) => state.userData);
  const token = getToken()
  const navigate = useNavigate()
  function signOut(){
    console.log("signOutcalled")
    localStorage.setItem("token", "")
    navigate("/")
  }
  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {token ? (
          <div>
            <NavLink className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </NavLink>
            <a onClick={signOut} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div>
        ) : (
          <div>
            <NavLink className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
