import React from 'react';

const AddSubjectPopup = ({ 
  show, 
  onClose, 
  preRequisites, 
  onAddPreRequisite, 
  onPreRequisiteChange 
}) => {
  if (!show) return null;

  return (
    <div className='admin-pop-overlay'>
      <button className='admin-pop-close' onClick={onClose}>Close</button>
      <div className="admin-subject-pop">
        <div className='header'>Add New Subject</div>

        <div className='form-group'>
          <div className='form-group-grid2'>
            <label htmlFor='subject_code'>
              <p>Subject code</p>
              <input type='text' id='subject_code' name='subject_code' />
            </label>
            <label htmlFor='subject_name'>
              <p>Subject name</p>
              <input type='text' id='subject_name' name='subject_name' />
            </label>
            <label htmlFor='lec_hours'>
              <p>Lec (Hours)</p>
              <input type='text' id='lec_hours' name='lec_hours' />
            </label>
            <label htmlFor='lab_hours'>
              <p>Lab (Hours)</p>
              <input type='text' id='lab_hours' name='lab_hours' />
            </label>
            <label htmlFor='lec_units'>
              <p>Lec (Units)</p>
              <input type='text' id='lec_units' name='lec_units' />
            </label>
            <label htmlFor='lab_units'>
              <p>Lab (Units)</p>
              <input type='text' id='lab_units' name='lab_units' />
            </label>
          </div>
          <div className='form-group-grid'>
            {preRequisites.map((preRequisite, index) => (
              <label key={index} htmlFor={`pre_requisites_${index}`}>
                <p>Pre Requisites {index + 1}</p>
                <input
                  type="text"
                  id={`pre_requisites_${index}`}
                  name="pre_requisites"
                  value={preRequisite}
                  onChange={(event) => onPreRequisiteChange(index, event)}
                />
              </label>
            ))}
          </div>
          <div className='add-input'>
            <button onClick={onAddPreRequisite}>+ Add Pre-Requisite</button>
          </div>
          <div className='admin-sub-pop'>
            <button>Add Subject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubjectPopup;
