import { useEffect } from "react";

// Components
import AdminNavbar from "./components/navbar";
import AdminSidebar from "./components/sidebar";

// CSS
import '../assets/css/admin/home.css';

const AdminHome = () => {

  useEffect(() => {
    document.title = 'Dashboard - Admin';
  }); 

  return(
    <>
      <div className="admin-section">
        <AdminNavbar/>
        <div className="admin-divider">
          <AdminSidebar/>
          <div className="admin-main">dashboard</div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;