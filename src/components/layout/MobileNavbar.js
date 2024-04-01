import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
const MobileNavbar = ({sidebarToggle,handleToggle}) => {
    const navbarData = [
        {id: "home",menuTitle: "Home",path: "/",},
        {id: "services",menuTitle: "Services", path: "/services",},
        {id: "projects",menuTitle: "Projects",path: "/projects",},
    ];
    const pathName=usePathname()

    
    const handleFalse=()=>{}
    const handleDropDown=()=>{}
  return (
    <>
    
    <div className={`${
        sidebarToggle
        ? 'mobile-sidebar-overlay-show mobile-sidebar-overlay'
        : 'mobile-sidebar-overlay-hide mobile-sidebar-overlay'
        }`}
        onClick={()=>handleToggle()}></div>
    <div
    className={`${sidebarToggle ? 'mobile-sidebar-show mobile-sidebar-containe' : 'mobile-sidebar-hide mobile-sidebar-containe'}`}
  >
    <Link href="/" className="d-block logo-main-mobile">
      Dania<span>.</span>
    </Link>

    <div className="sidebar-menu-container">
      <ul className="mobile-sidebar-menus">
    
         
        {navbarData.map(item =>  <li
            key={item.id}
            className={`${
             pathName == item.path
                ? 'mobile-menu-item text-secondary'
                : 'mobile-menu-item'
            }`}
            onClick={
              () => {
                handleDropDown(item.id), handleFalse();
              }
            }
          >
            <Link
              href={item.path}
              className={`${
              pathName == item.path
                ? 'd-flex align-items-center justify-content-between mobile-single-menu text-secondary'
                : 'd-flex align-items-center justify-content-between mobile-single-menu'
            }`}
              
            >
              <span className="textXL mobile-menu-link">
                {/* <component :is="item.icon" :size="20"></component> */}
                <span>{ item.menuTitle }</span>
              </span>
            </Link>
          </li>)}
         
       
      </ul>
    </div>
  </div>
    </>
    
  )
}

export default MobileNavbar