import React from "react";

function Education() {
  return (
    <div className="container pt-5  mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" />
        </div>
        <div className="col-6 mb-5">
          <h3 className="mb-4">Free and open market education</h3>
          <p className="fs-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="fs-5 education-link" style={{ textDecoration: "none" }}>
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="fs-5 mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="fs-5 education-link" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
