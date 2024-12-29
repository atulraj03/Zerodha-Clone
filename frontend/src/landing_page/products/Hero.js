import React from "react";

function Hero() {
  return (
    <div className="container mb-5 border-bottom  mt-5">
      <div className="row text-center p-5">
        <div className="col-12 p-5 text-muted">
          <h1 className="mb-3" style={{ fontSize: "300%" }}>
            Zerodha Products
          </h1>
          <p className="fs-5">Sleek, modern, and intuitive trading platforms</p>
          <p className="fs-6">
            Check out our{" "}
            <a
              href=""
              className="fs-6 education-link"
              style={{ textDecoration: "none" }}
            >
              investment offerings{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
