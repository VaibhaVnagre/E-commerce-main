import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import logoImage from "../../../images/logo-white-removebg-preview.png";
import { ProductContext } from "../../../context/ProductContext";
import TemporaryDrawer from "./menuMobile";
import { useLocation } from "react-router-dom";

const Header = ({ handleChange, search }) => {
  const { addToCart } = useContext(ProductContext);
  const [scrolled, setScrolled] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [isLogoVisible , setIsLogoVisible] = useState(true)
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const headerStyle = {
    backgroundColor: scrolled ? "white" : "transparent",
  };
  const showSearchicon = location.pathname === "/shop";

  const handleSearch = () => {
    if (window.innerWidth <= 600) {
      setIsLogoVisible(!isLogoVisible);
    }
    setSearchClicked(!searchClicked);
  };

  return (
    <div className="Header" style={headerStyle}>
      {isLogoVisible && <div className="headerLogo">
        <NavLink to={"/"}>
          <img
            src={logoImage}
            className="headerImg"
            style={{ width: "12rem" }}
            alt="logoImage"
          />
        </NavLink>
      </div>}
      <div className="headerLinks">
        <NavLink activeClassName="active-link" className="navLink" to={"/"}>
          Home
        </NavLink>
        <NavLink activeClassName="active-link" className="navLink" to={"/shop"}>
          Shop
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="navLink"
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="navLink"
          to={"/contact"}
        >
          Contact
        </NavLink>

      </div>
      <div className="headerIcons">
        {searchClicked && (
          <div className="searchInputDiv">
            <input
              type="text"
              placeholder="Search Product"
              value={search}
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}
        {showSearchicon && (
          <div className="iconDiv">
            <BsSearch style={{ fontSize: "1.8rem" }} onClick={handleSearch} />
          </div>
        )}
        <NavLink activeClassName="active-link" className="iconDivLink notCart" to={"/profile"}>
          <div className="iconDiv">
            <BsPerson />
          </div>
        </NavLink>
        <NavLink className="iconDivLink cartIconLink" to={"/cart"}>
          <div className="iconDiv">
            <BsCart />
            <span className="cartLength">{addToCart.length}</span>
          </div>
        </NavLink>
      </div>
      <div className="mobileDrawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
