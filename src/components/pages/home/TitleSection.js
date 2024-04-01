import React from 'react'
import titleShape from '@/assets/titleShape.png'
import Image from 'next/image'
const TitleSection = () => {
  return (
   
    <div 
    data-aos='zoom-in'
		data-aos-delay='50'
		data-aos-duration='1000'
		data-aos-easing='ease-in-out' className="card-style-two product-design p-32px">
      <span className="product-design__sub-title heading-4">Title</span>
      <h2 className="heading-2 product-design__title">Frontend Developer</h2>
      <Image
        src={titleShape}
        alt="Title shape"
        className="product-design__shape scale-up-down light-mood-image-shape"
      />
    </div>
  )
}

export default TitleSection