import React from "react";
import ".//App.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";

function Sixth() {
  return (
    <div className="sixth">
      <div className="sixth-container">
        <img
          src="https://hoverex.themerex.net/wp-content/uploads/2018/02/logo.png"
          alt=""
          width="191"
          height="84"
        />
        <br />
        <br />
        <p>
          Subscribe to be informed about token <br /> sale in advance.
        </p>
        <br />
        <input
          className="sixth-email"
          type="email"
          name="Email"
          id="Email"
          placeholder="   E-mail...."
        ></input>
        <button className="btn-Join">Subscribe</button>
        <ul className="sixth-icon">
          <li>
            <FacebookRoundedIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <RedditIcon />
          </li>
        </ul>
        <p>ThemeREX © 2023 All rights reserved</p>
      </div>
    </div>
  );
}

export default Sixth;
