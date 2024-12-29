import React from "react";

function Hero() {
  return (
    <section className="container-fluid pt-5  mt-3" id="supportHero">
      <div className="p-5 mt-5" id="supportWrapper">
        <h1 className="fs-3">Support Portal</h1>
        <a href="" style={{ fontSize: "22px" }}>
          Track tickets
        </a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3">
          <h4 className="mb-4">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input placeholder="Eg. how do I activate F&O" />
          <br></br>
          <a href="" className="mx-2" style={{lineHeight:"3"}}>Track account opening</a>
          <a href="" className="mx-2" style={{lineHeight:"3"}}>Track segment activation</a>
          <a href="" className="mx-2" style={{lineHeight:"3"}}>Intraday margins</a>
          <a href="" className="mx-2" style={{lineHeight:"3"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h4 className="mx-5">Featured</h4>
          <ol className="mx-5">
            <li>
              <a href="" style={{lineHeight:"2.5"}}>Suspension of trading - IDFC Limited</a>
            </li>
            <li>
              <a href="" style={{lineHeight:"2.5"}}>Rights Entitlements listing in October 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
