import React from "react";
import "../App.css";
import moment from "moment";
function First() {
  return (
    <div className="first">
      <div className="first-container">
        <h2>What Do We Do?</h2>
        <br />
        <p>
          We want to blur the line between the Cryptocurrency merchants and
          ordinary <br />
          consumers.We will popularize the Cryptocurrency by giving free
          admission and by <br />
          helping people understand and confide what we Believe to be future of
          money.
        </p>
        <br />
        <button className="btn-Join">Whitepaper</button>{" "}
        <button className="btn-login">Play Video</button>
        <br />
        <br />
        <b>{moment().format("MMMM Do YYYY, h:mm:ss a")}</b>
      </div>
      <div className="first-container2">
        <div className="first-circle"></div>
        <h1 className="sale">PreSale Bonuses:50%</h1>
      </div>
      <div className="paragraph">
        <p>
          Only 46.000.000 HVR will be issued
          <br />
          During presale Stage
        </p>
      </div>
      <br />
      <br />
      <div className="bars">
        <div className="bar1">
          <h2>35%</h2>
          <div className="custom1">
            <br />
            <br />
            <p>
              1 day only.Invest now and get <br />
              1500HVR for one ETH
            </p>
            <h3>1 ETH=1500HVR</h3>
          </div>
        </div>
        <div className="bar1">
          <h2>15%</h2>
          <div className="custom2">
            <br />
            <br />
            <p>
              1 Week ,At this stage you can get 1200
              <br />
              HVR for one ETH
            </p>
            <h3>1 ETH=1200HVR</h3>
          </div>
        </div>
        <div className="bar1">
          <h2>5%</h2>
          <div className="custom3">
            <br />
            <br />
            <p>
              2 weeks <br />
              Get 1000 HVR for one ETH
            </p>
            <h3>1 ETH=1000HVR</h3>
          </div>
        </div>
        <div className="bar1">
          <h2>Release Date</h2>
          <div className="custom4">
            <br />
            <br />
            <p>
              Release date <br />
              Get 800 HVR for one ETH
            </p>
            <h3>1 ETH=800HVR</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
