// Layout.js
import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="container-fluid">
      <Nav onToggleClick={handleToggleClick} />
      <Sidebar isOpen={isSidebarOpen} onItemClick={handleSidebarItemClick} />
      {/* Other content goes here */}
    </div>
  );
}

export default Layout;
