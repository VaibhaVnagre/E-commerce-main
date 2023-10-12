import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {Link} from "react-router-dom";
import "./style.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer">
     
        <MenuRoundedIcon onClick={() => {
          setOpen(true);
        }} className="menuIcon" style={{color:"black" , fontSize:"2rem"}}/>
     
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="mobileLinks">
          <Link to="/" style={{color:"var(--navy)"}}>Home</Link>
          <Link to={"/shop"} style={{color:"var(--navy)"}}>Shop</Link>
          <Link to="/about"style={{color:"var(--navy)"}}>About</Link>
          <Link to="/contact" style={{color:"var(--navy)"}}>
            Contact
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
