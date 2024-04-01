import React from 'react'


const SkillsCardLandingTwo = [
  "Vue.js",
  "Nuxt",
  "Vuex",
  "Pinia",
  "Vuetifyjs",
  "React",
  "Next.js",
  "Redux",
  "React Query",
  "HTML",
  "Css",
  "Bootstrap",
  "Tailwindcss",  
];

const sliderTwo = [
  "Version control system (Git)",
  "Responsive Website Development","state management","consuming REST API"]
const SkillsSection = () => {
  return (

    <div data-aos='zoom-in'
		data-aos-delay='50'
		data-aos-duration='1000'
		data-aos-easing='ease-in-out' className="card-style skills-card-landing-two overflow-hidden">
      <span className="heading-4 skills-card-landing-two__title">
        Skills & Tools
      </span>
      <div className="skills-card-landing-two__slider-aria">
        <div 
        className='marquee-wrapper-icon-slider'
        >
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {  SkillsCardLandingTwo.map((item,index) =>  <span
                  key={`skills-card-landing${index}`}
                  className='skills-card__slider-two__box'
                >
                  { item }
                </span>)}
              </li>
            </ul>
          </div>
        </div>

        <div className="marquee-wrapper-icon-slider">
          <div className="marquee-inner to-right">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {  sliderTwo.map((item,index) =>  <span
                  key={`skills-card-landing${index}`}
                  className="skills-card__slider-two__box"
                >
                  { item }
                </span>)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  

  )
}

export default SkillsSection