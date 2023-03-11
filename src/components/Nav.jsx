import React from 'react'

export const Nav = () => {
  return (
    <>
      <div id="Home" className="navbar bg-accent">
        <div className="flex-1">
          <a href="#Home" className="btn btn-ghost normal-case text-xl">
            Vysiogen
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="#Mission">
                About us
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="#Mission">Mission</a>
                </li>
                <li>
                  <a href="#Services">Services</a>
                </li>
                {/* <li>
                  <a href="#Contact">Contacts</a>
                </li> */}
              </ul>
            </li>
            {/*             <li>
              <a>Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  )
}
