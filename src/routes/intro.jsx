import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, BG } from "../images/images";
import { Button } from "../components/components";
import "../styles/routes.css";
import Dashboard from './admin/dashboard'
import Verify from './admin/verify'
import Blacklist from './admin/blacklist'


///


/// 
const button = {
  height: "1.2em",
  fontSize: "1.1em",
  width: "10em",
  padding: "1.5em",
};
const Intro = () => {
  return (


    <div
      className="initialPage"
      style={{
        width: "100vw",
        height: "calc(95vh - 20px)",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="column-center"
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={Logo}
          alt="MedLink"
          class="logo-name"
          style={{ width: "auto", height: "30vh" }}
        />

        <div className="tag-line">
          <div className="button-head row-center" style={{ gap: "1em" }}>
          <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/login"
            >
            <Button className={`button-rounded`} style={button}>
              LOGIN
            </Button>
           </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/create"
            >
              <Button className={`button-rounded`} style={button}>
                REGISTER
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
