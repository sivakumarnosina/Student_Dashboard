import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  
  

  return (
   
        <>
            <div className='d-flex justify-content-center align-items-center m-3'>
      <span> <i className='bi bi-person-circle fs-3'></i></span>
          </div>
          <hr className='text-dark' />
          <div className='list-group list-group-flush'>
            <a className='list-group-item py-3'>
              <i className='bi bi-speedometer2 fs-5 me-2'></i>
              <span className='fs-5'> Dashboard</span>
            </a>
            <a className='list-group-item py-3'>
              <i className='bi bi-person fs-5 me-2'></i>
              <span className='fs-5'>My Profile</span>
            </a>
            <a className='list-group-item py-3'>
                  <i className="bi bi-file-text fs-5 me-2"></i>
                  <span className='fs-5'>Resume</span>
                </a>
                <a className='list-group-item py-3'>
                  <i className="bi bi-bell fs-5 me-2"></i>
                  <span className='fs-5'>Job Alert</span>
                </a>
                <a className='list-group-item py-3'>
                  <i className="bi bi-save fs-5 me-2"></i>
                  <span className='fs-5'>Saved Jobs</span>
                </a>
                <a className='list-group-item py-3'>
                  <i className='bi bi-envelope-fill fs-5 me-3'></i>
                  <span className='fs-5'>Messages</span>
                </a>
                <a className='list-group-item py-3'>
                  <i className='bi bi-gear fs-5 me-2'></i>
                  <span className='fs-5'>Settings</span>
                </a>
                <a className='list-group-item py-3'>
                  <i className='bi bi-trash fs-5 me-2'></i>
                  <span className='fs-5'> Delete </span>
                </a>
          </div>
        </>
)
}


      export default Sidebar;