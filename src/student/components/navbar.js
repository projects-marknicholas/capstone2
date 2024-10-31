import { Link } from "react-router-dom";

// Assets
import Logo from '../../assets/img/logo.png';

// CSS
import '../../assets/css/student/navbar.css';

const Navbar = () => {
  return(
    <>
      <nav>
        <div className="left">
          <img src={Logo} alt="logo"/>
          <h1>UPHSD Calamba</h1>
        </div>
        <div className="right">
          <div className="nav-group">
            <Link to='/student'>Home</Link>
          </div>
          <div className="nav-group">
            <Link to='/student/curriculum'>Curriculum</Link>
          </div>
          <div className="nav-group">
            <Link to='/student/account'>Account Settings</Link>
          </div>
          <div className="nav-group">
            <Link to='/'>Logout</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;