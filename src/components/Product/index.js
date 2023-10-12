import React, { useContext , useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./style.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import FilledAlerts from "../Common/Toaster";

const Product = () => {
  const { product, setAddToCart, addToCart } = useContext(ProductContext);
  const [success, setSuccess] = React.useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  const handleCart = (item, e) => {
    if (!addToCart.some((cartProd) => cartProd.id === item.id)) {
      setAddToCart([...addToCart, item]);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1200);
    } else {
      alert("Already added to cart");
    }
  };
  return (
    <>
    {success && <FilledAlerts text={"Added to Cart"} color={"success"} />}
    <div className="selectedProduct">
      <div className="selectedProductImgDiv">
        <div className="mainImg">
          <img
            className="selecetedProductImg"
            src={product.img}
            alt={product.id}
          />
        </div>
        <div className="otherImagesDiv">
          {product.otherImages.map((image) => {
            return (
              <div className="otherImages">
                <img
                  src={image}
                  alt=""
                  style={{ width: "20rem", height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="productInfo">
        <div className="selectedProductName">{product.description}</div>
        <div className="selectedProductPrices">
          <div className="selectedRupeeDiv">
            <div className="priceIcon">
              <BsCurrencyDollar />
              <div className="selectedProductPrice">{product.price}</div>
            </div>

            {/* <div className='selectedProductCartIcon' ><BsCartPlus style={{fontSize:"2.2rem"}}/></div> */}
          </div>
          <div className="productDesc">{product.specs}</div>
        </div>
        <div className="addToCartDiv" onClick={(e) => handleCart(product, e)}>
          {/* <h2 style={{fontSize:"1.4rem"}}>Add to cart</h2> */}
          <BsCartPlus style={{ fontSize: "2.2rem" }} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;

// localStorage.setItem('product',JSON.stringify(product));
// const item = JSON.parse(localStorage.getItem('product'));
// console.log(item);
