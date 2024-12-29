import React from "react";

function Awards() {
  return (
    <div className="container p-2  mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" style={{width:"90%"}} />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p className="mb-4 fs-5">
            2+ million zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mb-2" style={{fontSize:"18px"}}>
            <div className="col-6">
              <ul>
                <li>Future and Otions</li>
                <li>Commodity derivatives</li>
                <li>Currenct derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <li>Stocks and IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width:"100%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
