import React from "react"
import image22 from '../AllImages/Firefly Wealth Management, money, asset 967.jpg'
import "./header.css"

const RenderItems=(item)=>{
    console.log(item?.item)
    return(
        <div className={`${item?.item?.horizontal ? "horizontal-container" :"container"}`} key={item?.item?.id}>
           
           {item?.item?.horizontal ? <img className="img1" src={image22} alt='logos' /> :<img alt="chrome" src={item?.item?.imageUrl} />}
            <p>   {item?.item?.name} </p>
            {item?.item?.horizontal && <hr className="horizontalLine" />}
            <p>   {item?.item?.description} </p>
       </div>
    )
}
export default RenderItems