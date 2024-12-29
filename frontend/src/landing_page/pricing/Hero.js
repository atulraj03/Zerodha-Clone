import React from "react";

function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
          <h1 className="text-muted mb-3">Charges</h1>
          <p className="fs-4 text-muted">List of all charges and taxes</p>
        </div>
      </div>
      <div className="row text-center text-muted border-top">
        <div className="col-4 p-5">
          <img src="media\images\pricingEquity.svg" />
          <h3 className="mb-4">Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\intradayTrades.svg" />
          <h3 className="mb-4">Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\pricingEquity.svg" />
          <h3 className="mb-4">Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
