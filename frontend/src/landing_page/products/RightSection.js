import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  kiteConnect,
  learnMore,
}
) {
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-4 p-5 mt-5 text-muted">
        <h1 className="mb-4">{productName}</h1>
          <p className="fs-6">{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{textDecoration: "none" }}
            >
              Learm More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-8">
        <img src={imageURL} style={{marginLeft:"270px", width:"70%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
