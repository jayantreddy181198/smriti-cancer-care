import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(path){
    const [Toggle, setToggle] = useState("");
    return (
        <header>
          <div class="logo-container">
            <Link to="/">
              <img src="images/LOGO.png" class="logo" />
            </Link>
          </div>
    
          <div class="ham-btn">
            {Toggle == "active" ? (
              <i
                class="fa fa-times"
                onClick={() => {
                  setToggle("");
                }}
              ></i>
            ) : (
              <i
                class="fa fa-solid fa-bars"
                onClick={() => {
                  setToggle("active");
                }}
              ></i>
            )}
          </div>
          <div
            class={"header-links " + Toggle}
            onClick={() => {
              setToggle("");
            }}
          >
            <ul className="scroll-auto">
              <Link to="/about" className="w-[100%] lg:w-auto">
                <li>
                  <a href="#" style={{ color: path === "/about" ? "red" : "" }}>
                    About
                  </a>
                </li>
              </Link>
              <Link to="/impact" className="w-[100%] lg:w-auto">
                <li>
                  <a href="#" style={{ color: path === "/impact" ? "red" : "" }}>
                    Impact
                  </a>
                </li>
              </Link>
              <Link to="/resources" className="w-[100%] lg:w-auto">
                <li>
                  <a href="#" style={{ color: path === "/resources" ? "red" : "" }}>
                    Resources
                  </a>
                </li>
              </Link>
              <Link to="/get-involved" className="w-[100%] lg:w-auto">
                <li>
                  <a href="#" style={{ color: path === "/get-involved" ? "red" : "" }}>
                    Get Involved
                  </a>
                </li>
              </Link>
              <Link to="/donate" className="w-[100%] lg:w-auto">
                    <li>
                        <a
                            href="#"
                            style={{ color: path === "/donate" ? "red" : "" }}
                            className="donate-link"
                        >
                        Donate
                        </a>
                    </li>
                </Link>
            </ul>
          </div>
        </header>
      );
    };
    
export default Header;
    
