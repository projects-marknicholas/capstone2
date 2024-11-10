// Assets
import AcceptSvg from '../../assets/svg/accept.svg';
import DeclineSvg from '../../assets/svg/decline.svg';

import '../../assets/css/admin/table.css';

const AdminTableAccounts = () => {
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
                <th>Full name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Last login</th>
                <th>Joined at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img/></td>
                <td>John Doe</td>
                <td>johndoe@gmail.com</td>
                <td>Admin</td>
                <td>[Date]</td>
                <td>[Date]</td>
                <td className="action-field">
                  <button className="accept">
                    <img src={AcceptSvg} alt="Accept"/> Accept
                  </button>
                  <button className="decline">
                    <img src={DeclineSvg} alt="Decline"/> Decline
                  </button>
                </td>
              </tr>
              <tr>
                <td><img/></td>
                <td>John Doe</td>
                <td>johndoe@gmail.com</td>
                <td>Admin</td>
                <td>[Date]</td>
                <td>[Date]</td>
                <td className="action-field">
                  <button className="accept">
                    <img src={AcceptSvg} alt="Activate"/> Activate
                  </button>
                </td>
              </tr>
              <tr>
                <td><img/></td>
                <td>John Doe</td>
                <td>johndoe@gmail.com</td>
                <td>Admin</td>
                <td>[Date]</td>
                <td>[Date]</td>
                <td className="action-field">
                  <button className="decline">
                    <img src={DeclineSvg} alt="Deactivate"/> Deactivate
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
    </>
  );
}

export default AdminTableAccounts;