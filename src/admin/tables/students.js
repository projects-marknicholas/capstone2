import { useState } from 'react';

// Components
import AssignStudentPop from '../popup/assign-student';

// Assets
import AssignSvg from '../../assets/svg/academic.svg';

// CSS
import '../../assets/css/admin/table.css';

const AdminTableStudents = () => {
  const [isAssignStudent, setIsAssignStudent] = useState(false);

  const handleAssignStudentClick = () => {
    setIsAssignStudent(true);
  };

  const closeAssignStudent = () => {
    setIsAssignStudent(false);
  };

  return(
    <>
      <div className="table-holder">
        <div className="table-header">
          <div tabIndex="-1" className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="search"
              id="search"
              name="search"
              autoComplete="off"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Table Data */}
        <div className="table-scrolling">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Student number</th>
                <th>Full name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img/></td>
                <td>12345</td>
                <td>John Doe</td>
                <td>johndoe@gmail.com</td>
                <td className="action-field">
                  <button className="view" onClick={handleAssignStudentClick}>
                    <img src={AssignSvg} alt="Assign"/> Assign
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-footer">
          <div className="item">
            <p>Showing 0 result(s)</p>
          </div>
          <div className="item center">
            <button className="load-more">
              Load More
            </button>
          </div>
          <div className="item right">
            <p>Total of 0 result(s)</p>
          </div>
        </div>
      </div>

      {isAssignStudent && 
        <AssignStudentPop close={closeAssignStudent} />
      }
    </>
  );
}

export default AdminTableStudents;