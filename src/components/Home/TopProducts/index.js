import React,{useContext,useEffect , useState} from "react";
import { items } from "../../../Data";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { ProductContext } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import FilledAlerts from "../../Common/Toaster";
import "./style.css";

const TopProducts = () => {
  const {setProduct, setAddToCart , addToCart}  = useContext(ProductContext);
  const [success , setSuccess] = useState(false);
  const navigate = useNavigate();
  const singleProduct = (item ,id) => {
    if(id){
      setProduct(item);
      navigate(`${`/product/${item.description.split(" ")}`}`);
    }
  };
useEffect(()=>{
  window.scrollTo(0, 0);
},[]);

const handleCart = (event , item) => {
  event.stopPropagation();
  if(!addToCart.some((cartProd)=>cartProd.id === item.id)){
    setAddToCart([...addToCart , item]);
    setSuccess(true);
    setTimeout(()=>{
      setSuccess(false);
    },1200)
  }
  else{
    alert("Already in the cart");
  }
};
  return (
    <div className="TopProducts">
       <h1>OUR TOP PRODUCTS</h1>
    <div className="allProducts topAllProducts">
    {success && <FilledAlerts text={"Added to cart"} color = {"success"} />}
      {items.slice(7, 11).map((item,id) => {
        return (
          <div className="product" onClick={()=>singleProduct(item,id)}>
            <div className="productImgDiv">
              <img
                className="productImg"
                src={item.img}
                style={{ width: "22rem" }}
                alt={item.id}
              />
            </div>
            <div className="productName">{item.description}</div>
            <div className="productPrices">
              <div className="rupeeDiv">
                <BsCurrencyDollar/>
                <div className="productPrice">{item.price}</div>
              </div>
              <div className='productCartIcon' onClick={(event)=>handleCart(event ,item)}><BsCartPlus style={{fontSize:"2.2rem"}}/></div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default TopProducts;
