import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
import Header from "../components/Common/Header";

const Error = () => {
  return (
    <div className="Error">
      <section className="jp-404">
        <h1>
          <span> 404 </span>
          <p className="pTag">Sorry Page Not Found!</p>
        </h1>

        <p className="pTag">
          The page you're looking for, doesn't exist. It may have removed or its
          URL has been changed.
        </p>

        <NavLink to="/" className="back-to-home">
          <i className="fa fa-home"></i> Back to Home{" "}
        </NavLink>
      </section>
    </div>
  );
};

export default Error;
