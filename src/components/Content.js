import React from "react";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
import Timer from "./counter";
import Countdown from "./counter";


function Content() {
  return (
    <div className="tent-cont">
      <div className="content">
        <h1>
          Hoverex Cryptocurrency <br></br>Pre-ICO starts in:
        </h1>
        <div className="count-down">
          <Countdown />
        </div>
      </div>
      <div className="count-media">
        <ul>
          <li>
          <RedditIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <ShareIcon />
          </li>
        </ul>
      </div>
      <div className="goal-wrap">
        <button className="btn-Join">Join Pre-ICO</button>
        <div className="donation">
          <h3>
            Current donation: <span className="dollar">$0</span>
          </h3>
          <br />
          <h3>
            Total amount of donations: <span className="dollar">$15,000</span>
          </h3>
        </div>
        <div className="goal-rap">
          <h4>
            Total <span className="dollar">$0</span>
          </h4>
          <br />
          <br />
          <h3>
            0 <span>$15,000</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Content;
