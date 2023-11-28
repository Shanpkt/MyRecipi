import React from 'react'
import "./newRecips.scss"
import data from "./data.json"
function NewRecips() {
  return (
    <div className='Newrecipie'>
        <h1>Our Newst Recipis</h1>
        <div className='Newrecipie__2535'>

           {data.map((e)=>{
             return(<div className='Newrecipie__646'>
                <img src={e.img} />
                <a>{e.name}</a>
             </div>)
           })}
        </div>
    </div>
  )
}

export default NewRecips