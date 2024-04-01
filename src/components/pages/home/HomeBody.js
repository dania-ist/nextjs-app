import React from 'react'
import InfoSection from './InfoSection'
import TitleSection from './TitleSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'
import LatestCard from './LatestCard'
import CustomLink from './CustomLink'
import Image from 'next/image'
import image from '@/assets/services.png'
import contactImage from '@/assets/image.png'
import Link from 'next/link'
import hoverIcon from '@/assets/social-icon-hover.png'
import { FaLinkedinIn } from "react-icons/fa";

const HomeBody = () => {
  return (
   <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div className="landing-body">
      <div className="landing-body__1st">
        <TitleSection />
        <InfoSection />
      </div>
      <div className="landing-body__2nd">
        
        <div className="second-up-section">
          <div className="all-project-and-skills">
            <ProjectsSection />
            <SkillsSection />
          </div>
          <div className="latest-works-and-others">
            <LatestCard />
            <div className="experience-and-profile">
              <div className="experience">
                <div className="experience-one card-style-two p-32px" data-aos='zoom-in'
		            data-aos-delay='50'
		            data-aos-duration='1000'
		            data-aos-easing='ease-in-out'>
                  <div className="experience__item">
                    <p className="experience__item-number display-4">+ 1</p>
                    <p className="experience__item-text textL">YEARS EXPERIENCE</p>
                  </div>
                </div>
                <div className="experience-one card-style-two p-32px" data-aos='zoom-in'
		              data-aos-delay='50'
		              data-aos-duration='1000'
		              data-aos-easing='ease-in-out'>
                    <div className="experience__item">
                      <p className="experience__item-number display-4">+ 1</p>
                      <p className="experience__item-text textL">TOTAL PROJECTS</p>
                    </div>
                </div>
              </div>
              
              <div className="profile profile-icons card-style-two p-32px" data-aos='zoom-in'
		          data-aos-delay='50'
		          data-aos-duration='1000'
		          data-aos-easing='ease-in-out'>
                <Link href="http://www.linkedin.com/in/dania-istanboli-95118a219" target='blank'
                className="position-relative icon-container profile-icon">
                  <FaLinkedinIn size="40"/>
                  <Image src={hoverIcon} alt="Hover Icon" className="hover-icon" />
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className="second-down-section">
          <div className="all-service card-style-two">
            <p className="heading-4">Services</p>
            <CustomLink link="/services" linkText="All Services" />
            <Image
            src={image}
            alt="All Service Shape"
            className="shape-service light-mood-image-shape"/>
          </div>
          <div className="get-in-touch card-style-two p-32px" data-aos='zoom-in'
		       data-aos-delay='50'
		       data-aos-duration='1000'
		       data-aos-easing='ease-in-out'> 
            <p className="heading-4">Let’s Work Together</p>
            <CustomLink target="blank" link="http://www.linkedin.com/in/dania-istanboli-95118a219" linkText="Get In Touch" />
            <Image
            src={contactImage}
            alt="Get in touch Shape"
            className="shape-get-touch light-mood-image-shape"
          />
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeBody