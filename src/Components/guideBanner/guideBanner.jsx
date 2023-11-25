import React from 'react'
import "./guideBanner.scss"
function GuideBanner() {
  return (
    <div className='guideBox'>
    <div className='guideBanner'>
     <div className='item1'>
        <div className='item1__HEADING'>THE BIG GUIDE</div>
        <img src='https://assets.epicurious.com/photos/59bc15cfc7086b08fc83341d/9:4/w_1432,h_636,c_limit/PIE-HERO-EPI-CLASSIC-THANKSGIVING-MENU-07092017.jpg'/>
     </div>
     <div className='item2'>
        <h2>Our Best ThanksGiving Recipi Tips</h2>
        <p>All the recipes and troubleshooting advice you need for a low-stress holiday.
                     </p>
     </div>
     <div className='item3'></div>
    </div>

    </div>
  )
}

export default GuideBanner