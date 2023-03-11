import React from 'react'
import Vy from '../media/vy.png'
import Ig from '../media/ig.svg'
import Fb from '../media/fb.svg'

export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div id="Contact">
          <img src={Vy} className="w-28" alt="Vysiogen's initials"/>
          <p className="font-medium text-lg">Vysiogen Digital Solutions</p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/vysiogen" className='cursor-pointer'>
              <img src={Ig} className="w-12" alt="personal instagram"/>
            </a>
            <a href="https://www.facebook.com/vysiogenpro" className='cursor-pointer'>
              <img src={Fb} className="w-12" alt="personal facebook"/>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

