import React from 'react'
import AllProjectImage from './AllProjectImage'
import image11 from '@/assets/job-portal.png'
import image1 from '@/assets/portfolio.png'
import image2 from '@/assets/real-time.png'
import image3 from '@/assets/project3-2.png'
const AllProjectBody = () => {
  return (
     <div className="m-t-60px">
    <div className="all-project-body">
      <div className="all-project__1st-row">
        <div className="all-project__1st-row-1st-column">
          <AllProjectImage image={image11} width="636" height="320" 
          desc="Job Portal Application support multiple user roles, including Employee and Employer."
          title="Next.js Job Portal App"/>
          <AllProjectImage image={image2} width="636" height="320"
          title="React Chat App" desc="Realtime single and group Chat Application." />
        </div>
        <div className="all-project__1st-row-2nd-column">
          <AllProjectImage image={image3} width="636" height="320"
          desc="Light/Dark Events Map Application."
          title="Next.js Events App"
           />
          <AllProjectImage image={image1} width="636" height="320"
          title="Next.js Portfolio App" desc="My Portfolio App." />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AllProjectBody