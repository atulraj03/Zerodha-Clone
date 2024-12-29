import React from "react";

function Pricing() {
  return (
    <div className="container p-4 pt-0  mt-5">
      <div className="row p-4">
        <div className="col-4 p-4">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p className="fs-5 text-muted mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="pricing-link" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-4">
          <div className="row text-center">
            <div className="col border p-2">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and <br></br> direct mutual funds</p>
            </div>
            <div className="col border p-2">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;