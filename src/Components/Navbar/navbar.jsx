import React from 'react'
import "./navbar.scss"
import SocialIcons from '../../Atoms/socialIcons/socialIcons'

function Navbar() {
  return (
    <div className='Navbar'>
        <div><a className='Navbar__108' >Epicurious</a></div>
        <div className='Navbar__333'>
        <SocialIcons/>
        </div>
      
    </div>
  )
}

export default Navbar