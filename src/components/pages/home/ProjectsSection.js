import React from 'react'
import allProjectImage from '@/assets/allProjectImage.png'
import allProjectStar from '@/assets/allProjectStar.png'
import CustomLink from './CustomLink'
import Image from 'next/image'
const ProjectsSection = () => {
  return (
    <div data-aos='zoom-in'
		data-aos-delay='50'
		data-aos-duration='1000'
		data-aos-easing='ease-in-out'  className="card-style-two all-projects-card-two p-32px">
      <div className="all-projects-card-two__title-text">
        <p className="heading-4">See My Latest Works</p>
      </div>

      <Image
        src={allProjectImage}
        alt="All Project Image"
        className="all-projects-card-two__image"
      />
      <CustomLink
        linkText="All Projects"
        link="/projects"
        className="all-projects-card-two__link"
      />
      <Image
        src={allProjectStar}
        width="{68}"
        height="{60}"
        alt="All Project Stars"
        className="all-projects-card-two__image-star scale-up-down light-mood-image-shape"
      />
    </div>
  )
}

export default ProjectsSection