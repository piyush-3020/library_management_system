import React from "react";
import "./Footer.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer-data">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <p>Librarian</p>
            <p>Gurukul Kangri University</p>
            <p>Haridwar</p>
            <p>Uttarakhand</p>
            <p>India</p>
            <p>
              <b>Email:</b>library@gmail.com
            </p>
          </div>
          <div className="librarian-details">
            <h1>Librarian</h1>
            <p>Name</p>
            <p>Education</p>
            <p>Contact: +91 9123456787</p>
          </div>
        </div>
        <div className="contact-social">
          <a href="#home" className="social-icon">
            <TwitterIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
          </a>
          <a href="#home" className="social-icon">
            <LinkedInIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
          </a>
          <a href="#home" className="social-icon">
            <TelegramIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
          </a>
          <a href="#home" className="social-icon">
            <InstagramIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
          </a>
        </div>
      </div>
      <div className="copyright-details">
        <p className="footer-copyright">
          &#169; 2025 copyright all right reserved
          <br />
        </p>
      </div>
    </div>
  );
}

export default Footer;
