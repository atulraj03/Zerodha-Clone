import React from "react";

function Stats() {
  return (
    <div className="container p-4 pb-0  mt-5">
      <div className="row p-4">
        <div className="col-6 p-4">
          <h1 className="mb-5">Trust with confidence</h1>
          <h4>Customer-first always</h4>
          <p className="fs-5 text-muted mb-4">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h4>No spam or gimmicks</h4>
          <p className="fs-5 text-muted mb-4">
          No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>

          <h4>The Zerodha universe</h4>
          <p className="fs-5 text-muted mb-4">
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h4>Do better with money</h4>
          <p className="fs-5 text-muted mb-4">
          With initiatives like <a href="" Nudge/> and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 p-3">
            <img src="media/images/ecosystem.png" style={{width:"90%"}}/>
            <div className="text-center">
                <a href="" className="mx-5 stats-link" style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href="" className="mx-5 stats-link" style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
