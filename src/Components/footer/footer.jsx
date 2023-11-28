import React from 'react'
import "./footer.scss"
import data from "./data.json"
function Footer() {
  return (
    <div className='footer'>
    <div className='footer__25343'>
        <div className='footer__6464'>
        <h3>Epacus</h3>
        <div className='footer__49394'>{data.map((e)=>{
            return(<img  src={e.img} />)
        })}</div>
        </div>
    </div>
    </div>
  )
}

export default Footer