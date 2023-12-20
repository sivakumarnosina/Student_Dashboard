// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Recent from './Recent';
import './style.css';

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Sidebar */}
        <div className={`bg-white p-0 ${isSidebarOpen ? 'open' : 'closed'}`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='col p-0 bg-secondary '>
          {/* Navbar */}
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <button
              className='navbar-toggler'
              type='button'
              onClick={handleToggleClick}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </nav>

          {/* Home Component */}
          <Home />

          {/* Recent Component */}
          <div className='recent'>
            <Recent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
