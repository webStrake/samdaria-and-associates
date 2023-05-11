import React from "react";
import "./Navbar.css";
import { gsap } from "gsap";
import { useRef, useState ,useEffect} from "react";
import logo from "../../utils/logo/SA Main Logo.png"
import { Link } from "react-router-dom";
function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const hamburgerHandler = () => {
    // e.prevenDefault();
    setIsActive(!isActive);
    // console.log("hi");
  };

  //  gsap.from(".list", {
  //   clearProps:true,
  //      X: -20,
  //       opacity: 0,
  //     stagger:0.3,
  //     ease:"power2.in"

  // });
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <>
      <div className={navbar ? "navbarMain opaqueBg" : "navbarMain"} >
        <div>
            <img className="navLogo" src={logo} width={70} height={100} alt="Samdaria & Associates"/>
        </div>
        <div className="hambur">
          <div
            id="hamburger"
            onClick={hamburgerHandler}
            className={isActive ? "open" : ""}
          >
            <svg width="50" height="50" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </div>
        </div>

        <div
          className={isActive ? "nav1-slide-right " : "nav1-slide-left"}
        ></div>
        <div
          className={isActive ? "nav2-slide-right " : "nav2-slide-left"}
        ></div>

        <div
          className={
            "nav " + (isActive ? "nav-slide-right " : "nav-slide-left")
          }
        >
          <div className="navbar">
            <ul>
              <li className="list "><Link className="nav-link " onClick={hamburgerHandler} to="/">Home</Link></li>
              <li className="list "><Link className="nav-link " onClick={hamburgerHandler} to="/about">About Us</Link></li>
              <li className="list "><Link className="nav-link " onClick={hamburgerHandler} to="/field">Practice Field</Link></li>
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
