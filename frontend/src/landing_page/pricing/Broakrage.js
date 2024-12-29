import React from "react";

function Broakrage() {
  return (
    <div className="container border-top pt-5">
      <div className="row">
        <div className="col-8 p-4 text-center">
          <a href="" style={{ textDecoration: "none" }}>
            <h5>Broakrage Calculator</h5>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2" }}
            className="text-muted mt-4"
          >
            <li>
              Call & Trade and RMS auto-square off Additional charges of ₹50+
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              20 per contract note, Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or 100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or 200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 40 per executed order instead of 20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4 text-center">
          <a href="" style={{ textDecoration: "none" }}>
            <h5>List of charges</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Broakrage;