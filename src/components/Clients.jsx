import React from 'react'
import Enel from '../media/enel.png'
import Vite from '../media/vt.png'
import Puppy from '../media/plc.png'
import Nello from '../media/ten.png'
import Accenture from '../media/acc.png'
import Crypto from '../media/co.png'

export const Clients = () => {
  return (
    <>
      <div
        id="Brands"
        className="flex justify-around items-center mb-16 mt-6 mx-6"
      >
        <img className="one" src={Enel} alt="Enel's website" />
        <img className="two twop" src={Puppy} alt="Puppy Lyfe Co's website" />
        <img className="two twon" src={Nello} alt="Nello' website" />
        <img className="two" src={Vite} alt="Vite's website" />
        <img className="one" src={Accenture} alt="Accenture's website" />
        <img className="one" src={Crypto} alt="Crypto's  website" />
      </div>
    </>
  )
}
