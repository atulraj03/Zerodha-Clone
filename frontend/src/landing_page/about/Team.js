import React from "react";

function Team() {
  return (
    <div className="container  mt-5">
      <div className="row pt-3">
        <div className="col-12 p-3 text-center">
          <h2 className="text-muted mb-5">People</h2>
        </div>
        <div className="col-6 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mb-3 mt-4 text-muted">Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div
          className="col-6 text-muted p-5"
          style={{ lineHeight: "1.7", fontSize: "1.1rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a> / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> / <a href="" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
