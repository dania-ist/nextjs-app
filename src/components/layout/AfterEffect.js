import React, { useEffect, useState } from 'react'


const AfterEffect = () => {
    const [showPreloader,setShowPreloader]=useState(true)
    useEffect(()=>{
         setTimeout(() => {
    setShowPreloader(false)
  }, 1000);
    },[])
  return (
     <>
     {showPreloader && <div id="preloader" >
    <div className="custom-preloader text-center"></div>
  </div>}</>
   )
  
}

export default AfterEffect