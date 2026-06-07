function Marquee() {
  return (
    <>
      <style>
        {`
          .marquee {
            overflow: hidden;
            width: 100%;
            padding: 40px 0;
          }

          .marquee-content {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: scroll 15s linear infinite;
          }

          .service-card {
            min-width: auto;
            height: auto;
            background-color: #c8f5b7 !important; {/* GREEN ON ALL SLIDES */}
            border-radius: 16px;
            padding: 20px 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-weight: 600;
            flex-shrink: 0;
          }

          .marquee-content:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <div className="marquee">
        <div className="marquee-content">
          <div className="service-card">Medical Coding</div>
          <div className="service-card">Claims Submission</div>
          <div className="service-card">Insurance Verification</div>
          <div className="service-card">Eligibility Verification</div>
          <div className="service-card">Denial Management</div>
          <div className="service-card">Revenue Analytics</div>
          <div className="service-card">Patient Billing</div>
          <div className="service-card">AR Follow-Up</div>
          <div className="service-card">Payment Posting</div>
          <div className="service-card">Compliance Management</div>
          <div className="service-card">Claims Scrubbing</div>
          <div className="service-card">Healthcare Analytics</div>
          <div className="service-card">Prior Authorization</div>
          <div className="service-card">Credentialing Support</div>
          <div className="service-card">Appeals Management</div>
          <div className="service-card">Revenue Optimization</div>
        </div>
      </div>
    </>
  );
}
export default Marquee;
