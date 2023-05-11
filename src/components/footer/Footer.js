import React from "react";
import "./Footer.css";
import logo from "../../utils/logo/SA Main Logo.png";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function Footer() {
  return (
    <>
      <div className="footerMain">
      <div className="footerDiv3">
        <h3>Quick Links</h3>
          <ul>
            <li>
              <Link className="footerLink" to="/">Home</Link>
            </li>
            <li>
              <Link className="footerLink" to="/about">About</Link>
            </li>
            <li>
              <Link className="footerLink" to="/field">Practise Field</Link>
            </li>
       
          </ul>

        </div>


        <div className="footerDiv1">
          <h3>Our Area</h3>
          <ul>
            <li>
              <Link className="footerLink" to="/field">CONSTITUTIONAL</Link>
            </li>
            <li>
              <Link className="footerLink" to="/field">CIVIL</Link>
            </li>
            <li>
              <Link className="footerLink" to="/field">ALTERNATE DISPUTE RESOLUTIONS SYSTEM</Link>
            </li>
            <li>
              <Link className="footerLink" to="/field">CRIMINAL</Link>
            </li>
            <li>
              <Link className="footerLink" to="/field">INTELLECTUAL PROPERTY RIGHTS</Link>
            </li>
            <li>
              <Link className="footerLink" to="/field">REAL ESTATE TRANSACTIONS</Link>
            </li>
            <li>
              <Link className="footerLink" to="/field">CORPORATE SERVICES</Link>
            </li>
          </ul>
        </div>
        <div className="footerDiv2">
          <h3>Get In Touch</h3>

          <div className="footerInfo">
            <FaMapMarkerAlt className="footerIcon" />
            <p>
              <b>AKSHAYY SAMADARIA</b>
              <br></br>
              Office No.20, Ground Floor, Prince Plaza, Door No.46, Pantheon
              Road, Egmore, Chennai – 600 008.
            </p>
          </div>

          <div  className="footerInfo">
            <BsTelephoneFill className="footerIcon" />
            <p>+91 9952006141</p>
          </div>

          <div  className="footerInfo">
            <AiTwotoneMail className="footerIcon" />
            <p>akshayy@samdariaandassociates.com</p>
          </div>
        </div>
      


      </div>
      <div className="footerEnd">
<h3>Copyright © 2023 samdarria & associates | All Rights Reserved.</h3>
      </div>
    </>
  );
}

export default Footer;
