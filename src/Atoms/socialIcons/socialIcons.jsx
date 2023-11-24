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

        <div className='iconBox__search_cont'>
            <h5>Search</h5>
            <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDIgNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwLjgxIDM1LjMybC05Ljk4Ni05Ljk4NWExNi4yNiAxNi4yNiAwIDAgMCAyLjM3My04LjQ4NUMzMy4xOTcgNy44MjIgMjUuMzc0IDAgMTYuMzQ1IDAgNy4zMiAwIDAgNy4zMiAwIDE2LjM0N2MwIDkuMDI4IDcuODIyIDE2Ljg1IDE2Ljg1IDE2Ljg1IDMgMCA1LjgxMi0uODE0IDguMjMtMi4yMjZsMTAuMDM3IDEwLjA0YTIuNTE0IDIuNTE0IDAgMCAwIDMuNTU3IDBsMi40OS0yLjQ5Yy45ODMtLjk4Mi42MjctMi4yMi0uMzU1LTMuMnpNNS4wMyAxNi4zNDZjMC02LjI1IDUuMDY3LTExLjMxNyAxMS4zMTUtMTEuMzE3IDYuMjUgMCAxMS44MiA1LjU3IDExLjgyIDExLjgyUzIzLjEgMjguMTY3IDE2Ljg1IDI4LjE2N2MtNi4yNSAwLTExLjgyLTUuNTctMTEuODItMTEuODJ6IiBmaWxsPSIjYTFhMWExIi8+PC9zdmc+" />
        </div>
        
    </div>
  )
}

export default SocialIcons