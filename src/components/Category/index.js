import React,{useEffect} from "react";
import "./style.css";
import { items } from "../../Data";
import { NavLink } from "react-router-dom";

const Category = ({ setCat }) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  const categoryProducts = {};
  items.forEach(item => {
    if (!categoryProducts[item.category]) {
      categoryProducts[item.category] = item;
    }
  });
  const uniqueCategoryProducts = Object.values(categoryProducts);

  console.log(uniqueCategoryProducts);
  let categories = [];
  const handleCategory = (category) => {
    categories = items.filter((item) => item.category === category);
    setCat(categories);
  };
  return (
    <div className="category">
      <h1>CATEGORIES</h1>

      <div className="allCategories">
        {uniqueCategoryProducts.map((item , id) => {
         return(
          <div class="content"  onClick={() => handleCategory(item.category)}>
             <NavLink to={'/shop'}>
                <div class="content-overlay"></div>
                <div className="categoryImg"><img class="content-image" src={item.img} alt={id} /></div>
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">{item.category}</h3>
                </div>
            </NavLink>
           </div>
         )
       }
      )}
      </div>
    </div>
  );
};

export default Category;
