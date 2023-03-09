import React, { useState } from "react";
import "./login.scss";
import clemnLogo from "../../components/images/logoTransparent.png";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Link to={`/`}>
            <Tippy content="Home">
              <img className="logo" src={clemnLogo} alt="" />
            </Tippy>
          </Link>
        </div>
      </div>
      <div className="box">
        <form action="">
          <div className="title">
            <h1>SING IN</h1>
          </div>
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button>LOGIN</button>
          <span>Something went wrong...</span>
          <a href="">FORGOT PASSWORD</a>
          <a href="">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};
