import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { BsCurrencyDollar } from "react-icons/bs";
import Header from "../Common/Header";
import "./style.css";
import { AiFillDelete } from "react-icons/ai";
import FilledAlerts from "../Common/Toaster/index";
import Button from "../Common/Button";
import { NavLink , useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
import {useAuth0} from "@auth0/auth0-react"

const Cart = () => {
  const [success, setSuccess] = useState(false);
  const { addToCart, setAddToCart } = useContext(ProductContext);
  const [placed, setPlaced] = useState(false);
  const [cartItem, setCartItem] = useState(
    Array.isArray(addToCart) ? addToCart : []
  );


  const {isAuthenticated , isLoading , loginWithRedirect} = useAuth0();
  const handleRemoveCart = (e, item) => {
    e.stopPropagation();
    setCartItem([...addToCart, cartItem]);
    const updatedItem = cartItem.filter((ele) => ele.id !== item.id);
    setCartItem(updatedItem);
    setAddToCart(updatedItem);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1200);
  };

  const increaseQuantity = (item) => {
    const updatedItem = { ...item }; // Create a copy of the item
    updatedItem.quantity = (updatedItem.quantity || 1) + 1; // Update quantity
    const updatedCart = cartItem.map((cartItem) =>
      cartItem.id === item.id ? updatedItem : cartItem
    );
    setCartItem(updatedCart);
    setAddToCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity && item.quantity > 1) {
      const updatedItem = { ...item }; // Create a copy of the item
      updatedItem.quantity -= 1; // Decrease quantity
      const updatedCart = cartItem.map((cartItem) =>
        cartItem.id === item.id ? updatedItem : cartItem
      );
      setCartItem(updatedCart);
      setAddToCart(updatedCart);
    }
  };
  const total = cartItem.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  
  const checkOut = () =>{
    if(!isLoading && !isAuthenticated){
      alert("Redirecting to Login Page")
      loginWithRedirect();
    }
    setPlaced(true);
    console.log("Checkout clicked"); 
    setAddToCart([]);
    setCartItem([]);

  }

  let shippingCharge=0;
  const shipping = () =>{
    if(total > 500){
      shippingCharge = 0;
      return shippingCharge;
    }
    else{
      shippingCharge = 20;
      return shippingCharge;
    }
  }
  const shipingCharge = shipping();
  const finalTotal = shippingCharge + total;
  return (
    <div className="Cart">
      {/* <Header /> */}
      {placed ? <Checkout /> : (<>
      {cartItem.length === 0 ? (
        <div className="empty">
          <p>Cart is empty!!</p>
          <NavLink to={"/shop"}>
            <Button name={"Shop"} onclick={() => console.log("to shop")} />
          </NavLink>
        </div>
      ) : (
        <div className="mainCart">
        <div className="cartPage">
          {success && (
            <FilledAlerts text={"Removed from the cart"} color={"error"} />
          )}
          <div
            className="cartAllProducts"
            style={{ display: "grid", gridTemplateColumns: "repeat" }}
          >
            {cartItem.map((item, id) => {
              return (
                <div className="cartProdd" key={id}>
                  <div className="cartNameImg">
                  <div className="cartImgDiv">
                    <img
                      className="cartImg"
                      src={item.img}
                      alt={item.id}
                    />
                  </div>
                  <div className="cartName">{item.description}</div>
                  </div>
                  <div className="cartPrices">
                    <div className="rupeeDiv">
                      <BsCurrencyDollar />
                      <div className="cartPrice">{item.price}</div>
                    </div>
                  </div>
                    <div className="quantity">
                    <div class="value-button" id="decrease" onClick={()=>decreaseQuantity(item)} value="Decrease Value">-</div>
                       <input type="text" id="quantity" value={item.quantity || 1} readOnly />
                    <div class="value-button" id="increase" onClick={()=>increaseQuantity(item)} value="Increase Value">+</div>
                    </div>
                    <div className="deleteDiv">
                    <AiFillDelete
                      onClick={(e) => handleRemoveCart(e, item)}
                      style={{ fontSize: "2.5rem", marginRight: "2rem" , cursor:"pointer" }}
                    />
                    </div>
                </div>
              );
            })}
          </div>
        </div>
          <div className="total">
            <h1>order summary</h1>
           <div className="subTotal">
           <p>{`Subtotal ${cartItem.length > 1 ? `(Items - ${cartItem.length})` : `item - 1`}`} -</p>
            <p>$ {total}</p>
           </div>
           <div className="shipping">
           <p>Shipping - </p>
            <p>{shipingCharge}</p>
           </div>
           <hr/>
           <div className="finalTotal">
            <p>Total - </p>
            <p>$ {finalTotal}</p>
           </div>
           <div className="cartButtons">
            <button type="button" className="checkout" onClick={checkOut}>Proceed to checkout</button>
            <NavLink to={'/shop'} className="continueShopping">continue shopping</NavLink>
           </div>
          </div>
          </div>
          
      )}
      </>
      )};
    </div>
)};

export default Cart;
