import React from 'react'

import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div><ul
    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    {/* Sidebar - Brand */}
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">
        SB Admin <sup>2</sup>
      </div>
    </a>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    {/* Nav Item - Dashboard */}
    <li className="nav-item active">
      <Link className="nav-link" to="/">
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>MentorDashboard</span>
      </Link>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Heading */}
    
        
      
    {/* Nav Item - Charts */}
    <li className="nav-item">
      {/* <a className="nav-link" href="tables.html" >
        <i className="fas fa-fw fa-chart-area" />
        <span>Users</span>
      </a> */}
    </li>
    {/* Nav Item - Tables */}
    <li className="nav-item">
      <Link className="nav-link" to={"/students"}>
        <i className="fas fa-fw fa-table" />
        <span>StudentDashboard</span>
      </Link> 
    </li>

    
    {/* Divider */}
     <hr className="sidebar-divider d-none d-md-block" />
    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle" />
    </div>
    {/* Sidebar Message */}
    <div className="sidebar-card d-none d-lg-flex">
      <img
        className="sidebar-card-illustration mb-2"
        src="img/undraw_rocket.svg"
        alt="..."
      />
      <p className="text-center mb-2">
        <strong>SB Admin Pro</strong> is packed with premium features, components,
        and more!
      </p>
      <a
        className="btn btn-success btn-sm"
        href="https://startbootstrap.com/theme/sb-admin-pro"
      >
        Upgrade to Pro!
      </a> 
    </div>
  </ul>
  </div>
  )
}

export default Sidebar;
