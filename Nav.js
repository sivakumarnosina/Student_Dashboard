import React from "react";
import 'bootstrap/js/dist/dropdown';
import './Nav.css';
function Nav(){
    return(
      <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">
    
   
    <div className="collapse navbar-collapse" id="collapsibleNavId">
  <ul className="navbar-nav ms-auto mt-2 mt-lg-4">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-expanded="false">
        Student
      </a>
      <div className="dropdown-menu dropdown-menu-end text-center" aria-labelledby="dropdownId">
        <a className="dropdown-item" href="#">Profile</a>
        <a className="dropdown-item" href="#">Settings</a>
        <a className="dropdown-item" href="#">Logout</a>
      </div>
    </li>
  </ul>
</div>

  </nav>
  </>
    );
}

export default Nav;