import React, { useContext, useState, useEffect } from "react";
import { items } from "../../Data";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import FilledAlerts from "../Common/Toaster/index";
import Header from "../Common/Header";
const Shop = ({ setCat, cat }) => {
  const navigate = useNavigate();
  const { setProduct, setAddToCart, addToCart } = useContext(ProductContext);
  const [success, setSuccess] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [search, setSearch] = useState("");
  const [allProds, setAllProds] = useState(false);
  // const [error, setError] = useState(null);
  const singleProduct = (item, id) => {
    if (id) {
      setProduct(item);
      navigate(`${`/product/${item.description.split(" ")}`}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCart = (event, item) => {
    event.stopPropagation();
    if (!addToCart.some((cartProd) => cartProd.id === item.id)) {
      setAddToCart([...addToCart, item]);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1200);
    } else {
      alert("Already in the cart");
    }
  };
  const allProd = () => {
    if (cat && cat.length > 0) {
      setCat([]);
      setAllProds(true);
    }
    setAllProds(true);
    setFiltered(false);
  };
  // const setCategory = (selectedCategory) => {
  //   setCat([selectedCategory]);
  //   setAllProds(false);
  //   setFiltered(null);
  //   setSearch(""); // Clear search when selecting a category
  // };

  const filter = (num) => {
    setFiltered(
      items.filter((item) => {
        if (num === 1) {
          return item.price < 200;
        } else if (num === 2) {
          return item.price > 200 && item.price < 500;
        } else if (num === 3) {
          return item.price > 500 && item.price < 1000;
        }
      })
    );
    setAllProds(false);
    return;
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const searchedItems = items.filter((item) =>
    item.description.toLowerCase().includes(search.trim().toLowerCase())
  );

  const itemsToRender = (()=>{
     if (search){
      return searchedItems;
    }
    else if(allProds){
      return items;
    }
    else if(filtered){
      return filtered;
    }
    else if(cat.length > 0){
      return cat;
    }
    else {
      return items;
    }
  })();
    
  return (
    <div className="shop">
      <Header search={search} handleChange={handleChange} />
      {searchedItems.length === 0 ? (
        <div className="result">
          <p>No results for "{search}"</p>
        </div>
      ) : (
        <>
          <div className="filters">
            Filters <p onClick={() => filter(1)}>$ 0 - $ 200</p>
            <p onClick={() => filter(2)}>$ 200 - $ 500</p>
            <p onClick={() => filter(3)}>$ 500 - $ 1000</p>
          </div>
          <div className="allProductsBtn" onClick={allProd}>
            🛍️All Products
          </div>
          {success && <FilledAlerts text={"Added to cart"} color={"success"} />}
          <div className="allProducts">
            {
           itemsToRender.map((item, id) => {
              return (
                <>
                  <div
                    className="product"
                    key={id}
                    onClick={() => singleProduct(item, item.id)}
                  >
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
                        <BsCurrencyDollar />
                        <div className="productPrice">{item.price}</div>
                      </div>
                      <div
                        className="productCartIcon"
                        onClick={(event) => handleCart(event, item)}
                      >
                        <BsCartPlus style={{ fontSize: "2.2rem" }} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
