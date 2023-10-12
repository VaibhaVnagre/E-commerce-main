import React,{useState} from 'react';
import celebration from "../../../images/celebration.png";
import {useNavigate} from "react-router-dom"
import "./style.css";
const Checkout = () => {
    const navigate = useNavigate();
    const [success , setSuccess] = useState(false);
    const [user , setUser] = useState({
        number:"",
        fName:"",
        date:"",
        cvv:"",
    })
   const {number, fName , date , cvv} = user;

    const placedOrder = () =>{
        if(!number || !fName || !date || !cvv){
            alert("All fields are mandatory");
            return;
        }
        setSuccess(true);
        setTimeout(() => {
            navigate('/shop');
        }, 5000);
    }
  return (
    <div className='modal'>
        { success ? ( <div className='innerModal placedd'>
            <img src={celebration} alt='iimg' style={{width:"20rem"}}/>
            <h1 style={{fontSize:"2rem"}}>Order Placed✌️</h1>
        </div>) :(
             <div className='innerModal'>
             <img src='https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png' style={{width:"20rem"}} alt='img'/>
         
       <div class="inputs">
           <input type="text" id="card-number" placeholder="Card number" onChange={(e)=>{setUser({...user, number:e.target.value})}} />
           <input type="text" id="card-holder" placeholder="Card holder's name" onChange={(e)=>{setUser({...user, fName:e.target.value})}}/>
           <input type="text" id="expiry-date" placeholder="MM/YY" onChange={(e)=>{setUser({...user, date:e.target.value})}}/>
           <input type="text" id="cvv" placeholder="CVV" onChange={(e)=>{setUser({...user, cvv:e.target.value})}}/>
       </div>
       <div className='buttonDiv'>
       <button type="submit" className="placedBtn" onClick={placedOrder}>Place your order</button>
       </div>
       </div>
        ) }
    </div>
  )
}

export default Checkout;