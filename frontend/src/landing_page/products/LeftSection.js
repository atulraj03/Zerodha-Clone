import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appstore,
}) {
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-8 p-5 ">
          <img src={imageURL} style={{ marginLeft: "70px" }} />
        </div>
        <div className="col-4 p-5 mt-5 text-muted">
          <h1 className="mb-4">{productName}</h1>
          <p className="fs-6">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "80px", textDecoration: "none" }}
            >
              Learm More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appstore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
