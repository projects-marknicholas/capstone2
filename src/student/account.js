// Components
import Navbar from "./components/navbar";

// Assets
import CameraSvg from "../assets/svg/camera.svg";

// CSS
import '../assets/css/student/account.css';

const AccountSettings = () => {
  return(
    <>
      <Navbar/>
      <div className="account-settings">
        <div className="as-header">
          <h2>Student Account Settings</h2>
          <p>Manage your account information and verification status.</p>
        </div>

        <div className="change-photo">
          <div className="image">
            <img src />
          </div>
          <button>
            <input
              type="file"
            />
            <img src={CameraSvg}/>
            Change Photo
          </button>
        </div>

        <div className="grid-input">
          <div className="item">
            <p>Student Number</p>
            <input
              type="number"
              id="student_number"
              name="student_number"
              autoComplete="off"
              placeholder="2024-0001"
            />
          </div>
          <div className="item">
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="item">
            <p>First Name</p>
            <input
              type="text"
              id="first_name"
              name="first_name"
              autoComplete="off"
              placeholder="John"
            />
          </div>
          <div className="item">
            <p>Last Name</p>
            <input
              type="text"
              id="last_name"
              name="last_name"
              autoComplete="off"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="account-status">
          <div className="left">
            <h3>Account Status</h3>
            <p>Your account is currently <span className="verified">Verified</span></p>
          </div>
          <div className="right">
            <button>Verify now</button>
          </div>
        </div>

        <button className="submit">Save Changes</button>
      </div>
    </>
  );
}

export default AccountSettings;