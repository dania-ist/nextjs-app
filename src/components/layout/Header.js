import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  const navbarData = [
  {
    id: "home",
    menuTitle: "Home",
    path: "/",
  },
  {
    id: "services",
    menuTitle: "Services",
    path: "/services",
  },
  {
    id: "projects",
    menuTitle: "Projects",
    path: "/projects",
  },
];
  const [sidebarToggle,setSidebarToggle]=useState(false)
  const pathName=usePathname()
  const handleToggle=()=>{
    setSidebarToggle(!sidebarToggle)
  }
  const handleFalse = () => {
    setSidebarToggle(false)
  };
  return (
   <div className="navbar-container container position-relative z-3">
    
    <div className="desktop-navbar-container">
    <div>
      <Link href="/" className="logo-main"> Dania<span>.</span> </Link>
    </div>
    <ul className="desktop-menu-items" id="primary">
      {navbarData.map((item)=>(
      <li  className="menu-item" key={item?.id}>
          <Link className={`${
              pathName===item.path
                ? 'textL font-medium navbar-hover-text text-secondary'
                : 'textL font-medium navbar-hover-text menu-item-text-white'
            }`} href={item?.path}> { item?.menuTitle }</Link>
        </li>
      ))}
    </ul>
    <Link href="#" className="custom-btn d-flex align-items-center">
    <span className="kew-text light-theme-white-text">Let’s Talk</span></Link>
  </div>
   
    <div className="mobile-navbar-container bg-light-white">
      <div
        
        className={` ${sidebarToggle ? 'hamburger is-active' : 'hamburger'}`}
        onClick={()=>handleToggle()}
      >
        <div className="hamburger__container">
          <div className="hamburger__inner"></div>
          <div className="hamburger__hidden"></div>
        </div>
      </div>
      <Link href="#" className="custom-btn d-flex align-items-center">
        <span className="kew-text light-theme-white-text">Let’s Talk</span></Link>
    </div>
    <MobileNavbar sidebarToggle={sidebarToggle} handleToggle={handleToggle} handleFalse={handleFalse}/>
  </div>
  )
}

export default Header