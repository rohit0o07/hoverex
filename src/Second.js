import React from "react";
import "../src/App.css";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InsertChartIcon from "@mui/icons-material/InsertChart";

function Second() {
  return (
    <div className="second">
      <div className="second-heading">
        <h2>Features of Hoverex</h2>
        <p>
          Hoverex brings together vendors and buyers without a central bank or
          single
          <br /> administrator to ensure clear and fair deals
        </p>
      </div>
      <br />
      <div className="second-cards">
        <div className="second-card1">
          <CurrencyExchangeIcon style={{ fontSize: 90 }} />
          <br />
          <br />
          <br />
          <h3>Low Transaction Costs</h3>
          <br />
          <p>
            A decentralized platform available to <br />
            customers with lower transactions payments
            <br />
            and operational expenses.
          </p>
          <br />
          <br />
          <button className="btn-login">Learn More</button>
        </div>
        <div className="second-card1">
          <ReceiptIcon style={{ fontSize: 90 }} />
          <br />
          <br />
          <br />
          <h3>C2C Transactions</h3>
          <br />
          <p>
            C2C operations are easy,speedy and safe <br />
            with Hovrex.send HVRs or your choice of <br />
            currency to any client on the platform
          </p>
          <br />
          <br />
          <button className="btn-login">Learn More</button>
        </div>
        <div className="second-card1">
          <InsertChartIcon style={{ fontSize: 90 }} />
          <br />
          <br />
          <br />
          <h3>Premium Toolkit for Brands</h3>
          <br />
          <p>
            We have optimized consumer targetting by <br />
            giving companies the tools and insight to known their clients.
          </p>
          <br />
          <br />
          <button className="btn-login">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Second;
