import React from "react"
import {exploreData} from "../headerData/headData"
import './header.css'

const Header=()=>{

    return(
        <div className="header-top">
        <div className="header-left">
            <img className="logo" src='https://pbs.twimg.com/profile_images/1191518282823520256/CBLoZGkV_400x400.png' alt="logo" />
            <h3>Silber Private Bank </h3>
        </div>
        <div className="header-right">
            {exploreData.map((item)=>{
                return(
                    <div className="header-right-items">
                    {item?.isBtn ? <button className={item.btnColor ?'button2':''}> {item?.name}  </button> :<p style={{marginTop:'10px'}}> {item?.name}</p> }
                    </div>
                )
            })}
        </div>
        </div>
    )

}
export default Header