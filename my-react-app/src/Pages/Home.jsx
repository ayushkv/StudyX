import React from 'react'
import Hero from '../components/hero/Hero'
import Courses from '../components/courses/Courses'
import AboutUs from '../components/AboutUs/AboutUs'
import Testimonial from '../components/Testimonials/Testimonial'
import ContactUs from '../components/ContactUs/ContactUs'
import FAQComponent from '../components/FAQ/FAQ'
import Registrations from '../components/registration/registrations'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Courses/>
      <Registrations/>
      <AboutUs/>
      <Testimonial/>
      <FAQComponent/>
      <ContactUs/>
    </div>
  )
}
