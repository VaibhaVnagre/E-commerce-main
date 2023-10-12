import React from 'react'
import "./style.css";
import Button from "../../Common/Button";
import {NavLink} from "react-router-dom";
const Banner = () => {
  return (
    <>
    <div className='Banner'>
        <div className='bannerText'>
            <p>Elevate Your Shopping Experience</p>
            <NavLink to={"/shop"}>
            <Button name={"Shop now"} outlined={true}  onclick={()=>console.log("clicked")}/>
            </NavLink>
        </div>
       <div className='bannerImg'>
       <img src='https://media.istockphoto.com/id/507653289/photo/child-on-trip-to-shopping-mall-with-parents.jpg?s=612x612&w=0&k=20&c=wxRlTpC_ITpm6J0u__QnkekiJlq0ZHR2VeociPG2Y68='  alt='bannerImg'/>
       </div>
      
    </div>
    
    </>
  )
}

export default Banner