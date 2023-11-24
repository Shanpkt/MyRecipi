import React from 'react'
import "./socialIcons.scss"
import data from "./icons.json"
function SocialIcons() {

  return (
    <div className='iconBox'>
        <h5 className='iconBox__243'>Follow</h5>
       <div className='iconBox__999' > {data.icons.map((e)=>{
return(
    <img className='iconBox__990' src={e.img} />
)
        })}</div>
        
    </div>
  )
}

export default SocialIcons