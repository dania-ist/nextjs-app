import React from 'react'

const Footer = () => {
  return (
     <footer className="landing-footer m-t-120px position-relative z-2 container">
    <div className="landing-footer__left">
      <p className="landing-footer__copyright-text textL">
        Developed using
         Nextjs 
      </p>
      <p className="landing-footer__design-text textL">
       { new Date().getFullYear() }
      </p>
    </div>
    <ul className="landing-footer__menu">
      Portfolio Website
    </ul>
  </footer>
  )
}

export default Footer