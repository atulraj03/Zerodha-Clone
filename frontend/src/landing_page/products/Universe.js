import React from "react";

function Universe() {
  return (
    <div className="container  mt-5">
      <div className="row p-5">
        <div className="col-12 text-center p-3">
          <h1 className="mb-4">The Zerodha Universe</h1>
          <p className="mb-4">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\smallcaseLogo.png" className="mb-2" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media\images\streakLogo.png"
            style={{ width: "50%" }}
            className="mb-2"
          />
          <p className="text-small text-muted">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ width: "80%" }}
            className="mb-2"
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "50%" }}
            className="mb-2"
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media\images\goldenpiLogo.png"
            style={{ width: "50%" }}
            className="mb-2"
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media\images\dittoLogo.png"
            style={{ width: "35%" }}
            className="mb-2"
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-4 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
