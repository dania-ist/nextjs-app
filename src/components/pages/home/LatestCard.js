import React from 'react'
import Image from 'next/image'
const arrayLength = Array.from({ length: 50 });
import starShape from '@/assets/starShape.png'
const LatestCard = () => {
  return (
    <div data-aos='zoom-in'
		data-aos-delay='50'
		data-aos-duration='1000'
		data-aos-easing='ease-in-out' className="card-style latest-card position-relative overflow-hidden">
      <div className="marquee-wrapper latest-slider-two">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
               { arrayLength.map((item,index) =>  <span
                key={`latest-two${index}`}
              >
                <span className="star-image">
                  <Image src={starShape} alt="Star Shape" />
                </span>
                <span className="latest-work-slider-text textL">
                  <span className="latest-work-light-text"> LATEST WORKS AND FEATURED</span>
                </span>
              </span>)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LatestCard