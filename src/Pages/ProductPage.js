import React from "react";
import {useNavigate} from "react-router-dom";
import Product from "../components/Product";
import Header from "../components/Common/Header";
import { items } from "../Data";
import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { ProductContext } from "../context/ProductContext";
const ProductPage = () => {
  const { setProduct ,product , setAddToCart , addToCart } = useContext(ProductContext);
  const relatedProducts = items.filter((item)=>item.category === product.category && item.id !== product.id);
  const navigate = useNavigate();
  const handleCart = (e,item) =>{
    e.stopPropagation();
    if(!addToCart.some((cartProd)=> cartProd.id === item.id)){
      setAddToCart([...addToCart , item]);
    }
  }
  const handleProduct = (i,ele) =>{
    if(i){
      setProduct(ele);
      navigate(`/product/${i}`)
    }
  }
  return (
    <div>
      <Header />
      <Product />
      {relatedProducts.length > 0 && <h1 className="relatedProducts" style={{fontWeight:"700"}}>Related Products</h1>}
      <div className="allProducts shuffled">
       
        { relatedProducts.map((ele , i )=>{
         
            return (
              <div className="product" onClick={(e)=>handleProduct(i,ele)}>
                <div className="productImgDiv">
                  <img
                    className="productImg"
                    src={ele.img}
                    style={{ width: "22rem" }}
                    alt={ele.id}
                  />
                </div>
                <div className="productName">{ele.description}</div>
                <div className="productPrices">
                  <div className="rupeeDiv productRupeeDivv">
                    <div className="productPrice">$ {ele.price}</div>
                    <div className='productCartIcon' onClick={(event)=>handleCart(ele)}><BsCartPlus style={{fontSize:"2.2rem"}}/></div>
                  </div>
                </div>
              </div>
            );
            })}
      </div>
    </div>
  );
};

export default ProductPage;
