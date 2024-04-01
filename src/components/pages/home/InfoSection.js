import React from 'react'
import Image from 'next/image'
import profileImage from '@/assets/profileImage.svg'
import profileShape from '@/assets/profileShape.png'
import Link from 'next/link'
const InfoSection = () => {
  return (

    <div
    data-aos='zoom-in'
		data-aos-delay='50'
		data-aos-duration='1000'
		data-aos-easing='ease-in-out' 
    className="card-style-two biography-style">
      <div className="position-relative">
        <Image
          src={profileImage}
          width={260}
          height={260}
          alt="Profile Bio"
          className="biography-style__bio-image "
        />
        <Image
          src={profileShape}
          alt="Profile shape"
          className="biography-style__bio-shape"
        />
      </div>
      <div className="biography-style__button-text pt-12">
        <Link href="#" className="biography-style__button textXL">
          I’m Dania Istanboli
        </Link>
        <p className="biography-style__text textL">
          A Software Engineer and Front-end Developer
        </p>
      </div>
    </div>
  )
}

export default InfoSection