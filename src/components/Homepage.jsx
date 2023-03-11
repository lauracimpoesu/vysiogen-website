import React from 'react'
import Success from '../media/up.png'

export const Homepage = () => {
  return (
    <>
      <div id="Home" className="hero min-h-screen bg-gradient-to-r from-[#bbffff] via-white to-[#FFE2E8]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Success} className="up-image rounded-lg mb-5" alt="winning growth graph" />
          <div>
            <h1 className="text-5xl font-bold">
              The Best Digital Solutions For Your Business
            </h1>
            <p className="py-6">
              At Vysiogen, we are dedicated to helping companies individuals thrive in the
              digital world. Our expertise in web and app development, digital
              marketing, and data analytics allows us to provide tailored
              solutions to help you achieve your online goals and reach your
              full potential. Ready to go to the next level?
            </p>
            <a href="mailto:vysiogenpro@gmail.com">
            <button className="btn btn-primary text-accent">
              Speak To Us Today
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

