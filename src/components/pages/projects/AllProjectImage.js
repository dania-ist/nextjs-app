import React from 'react'
import linkImage from '@/assets/link-img.png'
import Image from 'next/image'
const AllProjectImage = ({image,width,height,desc,title}) => {
  return (
  
    <div className="image-body" data-aos='zoom-in'
		data-aos-delay='50'
		data-aos-duration='1000'
		data-aos-easing='ease-in-out'>
     <Image
     
        src={image}
        width={width}
        height={height}
        alt="All Projects image 11"
        className="image-body__image img-fluid"
      />
      <div  className="all-project-link">
        <span className="all-project-link__text-area">
          <span className="link-title heading-2">{title}</span>
          <span className="textL link-text">
            {desc}
          </span>
        </span>
      </div>
    </div>

  )
}

export default AllProjectImage