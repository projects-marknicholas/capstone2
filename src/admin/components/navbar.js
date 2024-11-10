import { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '../../assets/img/logo.png';
import ArrowDownSvg from '../../assets/svg/arrow-down.svg';

// CSS
import '../../assets/css/admin/navbar.css';

const AdminNavbar = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return(
    <>
      <div className="admin-nav">
        <div className="left">
          <img src={Logo}/>
          <div className="admin-nav-info">
            <p>UPHSD Calamba</p>
            <span>School Automate</span>
          </div>
        </div>
        <div className="right">
          <div className="profile" onClick={toggleTooltip}>
            <div className="image"></div>
            <p>John Doe</p>
            <img src={ArrowDownSvg}/>
            {isTooltipVisible && (
              <div className="tooltip">
                <Link>Account Settings</Link>
                <Link to='./'>Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNavbar;