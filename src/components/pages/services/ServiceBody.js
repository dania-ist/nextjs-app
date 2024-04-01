import Image from 'next/image'
import React from 'react'
import development from '@/assets/development.png'

const ServiceBody = () => {
  return (
      <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2 m-t-60px">
        <div className="service-body">
          <div className="service-body__web-development service-card" data-aos='zoom-in'
		      data-aos-delay='50'
		      data-aos-duration='1000'
		      data-aos-easing='ease-in-out'>
            <h3 className="heading-3 card-title">
              <span className="title-top">Front-end</span>
              <span className="title-bottom"> Development</span>
            </h3>
            <Image
            src={development}
            alt="Image"
            className="m-t-40px img-fluid"
            />
            <p className="m-t-40px textL font-thin card-text-color">
            I build creative, responsive and big scale websites using React and Vue JavaScript Frameworks
            </p>
        </div>
    </div>
  </div>
  )
}

export default ServiceBody