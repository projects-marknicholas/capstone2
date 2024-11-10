import { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import EditSvg from '../../assets/svg/edit.svg';
import ArchiveSvg from '../../assets/svg/trash.svg';

// Components
import AddSubjectPopup from '../popup/add-subject';
import EditSubjectPopup from '../popup/edit-subject';

// CSS
import '../../assets/css/admin/table.css';
import '../../assets/css/admin/view.css';

const AdminTableSubjects = () => {
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [showEditSubject, setShowEditSubject] = useState(false);
  const [preRequisites, setPreRequisites] = useState(['']); // Initial prerequisites

  const handleAddSubjectClick = () => {
    setShowAddSubject(!showAddSubject);
  };

  const handleEditSubjectClick = () => {
    setShowEditSubject(!showEditSubject);
  };

  const handleCloseSubject = () => {
    setShowAddSubject(false);
    setShowEditSubject(false);
  };

  const handleAddPreRequisite = () => {
    setPreRequisites([...preRequisites, '']);
  };

  const handlePreRequisiteChange = (index, event) => {
    const newPreRequisites = [...preRequisites];
    newPreRequisites[index] = event.target.value;
    setPreRequisites(newPreRequisites);
  };

  return(
    <>
      <div className="table-holder">
        <div className="table-header">
          <div className="table-btns">
            <Link onClick={handleAddSubjectClick}>+ Add Subject</Link>
          </div>
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
                <th>Subject code</th>
                <th>Subject name</th>
                <th>Lec (Hours)</th>
                <th>Lab (Hours)</th>
                <th>Lec (Units)</th>
                <th>Lab (Units)</th>
                <th>Pre requisites</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234</td>
                <td>Subject</td>
                <td>1.0</td>
                <td>2.0</td>
                <td>1.0</td>
                <td>2.0</td>
                <td>Subject 1, Subject 2</td>
                <td className="action-field">
                  <button className="accept" onClick={handleEditSubjectClick}>
                    <img src={EditSvg} alt="Edit"/> Edit
                  </button>
                  <button className="decline">
                    <img src={ArchiveSvg} alt="Decline"/> Archive
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

      {showAddSubject && (
        <AddSubjectPopup
          show={showAddSubject}
          onClose={handleCloseSubject}
          preRequisites={preRequisites}
          onAddPreRequisite={handleAddPreRequisite}
          onPreRequisiteChange={handlePreRequisiteChange}
        />
      )}

      {showEditSubject && (
        <EditSubjectPopup
          show={showEditSubject}
          onClose={handleCloseSubject}
          preRequisites={preRequisites}
          onAddPreRequisite={handleAddPreRequisite}
          onPreRequisiteChange={handlePreRequisiteChange}
        />
      )}
    </>
  );
}

export default AdminTableSubjects;
