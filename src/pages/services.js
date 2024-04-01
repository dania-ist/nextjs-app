import DefaultLayout from '@/components/default-layout'
import AfterEffect from '@/components/layout/AfterEffect'
import LinkBackHome from '@/components/layout/LinkBackHome'
import ServiceBody from '@/components/pages/services/ServiceBody'
import React from 'react'

const services = () => {
  return (
   <>
    <div className="container">
    <LinkBackHome />
    <ServiceBody />
  </div>
  <AfterEffect />
  <div className="about-top-left-element"></div>
  <div className="service-bottom-right"></div>
  </>
  )
}

export default services
services.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}