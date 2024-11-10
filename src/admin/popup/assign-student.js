// Assets
import RemoveSvg from '../../assets/svg/trash.svg';

const AssignStudentPop = ({close}) => {
  return(
    <div className='admin-pop-overlay'>
      <button className='admin-pop-close' onClick={close}>Close</button>
      <div className="admin-subject-pop">
        <div className='header'>Assign Subject to [John Doe]</div>

        <div className="filters">
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Seach for subjects..."
          />
          <select>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
          <select>
            <option>1st</option>
            <option>2nd</option>
          </select>
        </div>

        <div className="subs">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked
                    id="status"
                    name="status"
                  />
                </td>
                <td>
                  <div className="output">
                    123 - Subject
                  </div>
                </td>
                <td>
                  <div className="output">
                    3 units
                  </div>
                </td>
                <td>
                  <div className="output">
                    3 units
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    id="credits"
                    name="credits"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="status"
                    name="status"
                  />
                </td>
                <td>
                  <div className="output">
                    123 - Subject
                  </div>
                </td>
                <td>
                  <div className="output">
                    3 units
                  </div>
                </td>
                <td>
                  <div className="output">
                    3 units
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    id="credits"
                    name="credits"
                  />
                </td>
                <td>
                  <button><img src={RemoveSvg}/></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignStudentPop;