import Link from 'next/link'
import React from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
const LinkBackHome = () => {
  return (
    <div className="m-t-60px z-2">
    <Link href="/" className="button-back-to-home light-theme-white-text">
      
      <FaCircleArrowLeft size="24"/>
      <span style={{marginLeft:'5px'}}>Back To Home</span>
    </Link>
  </div>
  )
}

export default LinkBackHome