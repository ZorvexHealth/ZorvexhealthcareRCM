import heroBg from "./assets/hero-bg.png";
import leaf from "./assets/white-leaf.png";

function Hero({ openPopup }) {
  return (
    <>
      <style>
        {`
          .hero-section {
            height: 100vh;
            width: 100%;
            background-image: url(${heroBg});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            overflow: hidden;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: transparent;
            pointer-events: none;
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 100;

            max-width: 1200px;
            margin-left: 90px;
            padding-top: 170px;
          }

          .hero-tag {
            color: white;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.5px;
            margin-bottom: 15px;
          }

          .hero-title {
            font-family: "Jomhuria", serif;
            font-size: 145px;
            line-height: 0.72;
            color: white;
            font-weight: 400;
            margin-bottom: 30px;
          }

          .leaf-inline {
            height: 45px;
            margin-left: 8px;
            vertical-align: middle;
          }

          .hero-description {
            color: white;
            max-width: 650px;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .hero-buttons {
            display: flex;
            gap: 15px;
            position: relative;
            z-index: 101;
          }

          .hero-btn-primary {
            background: #3fa55b;
            color: white;
            border: none;
            border-radius: 12px;
            padding: 14px 24px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          }

          .hero-btn-primary:hover {
            background: #36914f;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          }

          .hero-btn-secondary {
            background: white;
            color: #3fa55b;
            border: none;
            border-radius: 12px;
            padding: 14px 24px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          }

          .hero-btn-secondary:hover {
            transform: translateY(-2px);
            background: white;
            box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          }

          .hero-marquee {
            position: absolute;
            bottom: 70px;
            left: 0;
            width: 100%;
            overflow: hidden;
            z-index: 2;

            /* IMPORTANT */
            pointer-events: none;
          }

          .hero-marquee-track {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: scroll 35s linear infinite;
          }

          .hero-card {
            background: rgba(63, 165, 91, 0.25);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);

            border: 1px solid rgba(255, 255, 255, 0.2);

            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

            color: white;
            padding: 12px 24px;
            border-radius: 12px;

            font-size: 14px;
            font-weight: 500;

            white-space: nowrap;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 992px) {
            .hero-content {
              margin-left: 30px;
              margin-right: 30px;
              padding-top: 150px;
            }

            .hero-title {
              font-size: 48px;
            }

            .hero-description {
              font-size: 15px;
            }

            .leaf-inline {
              height: 32px;
            }

            .hero-buttons {
              flex-wrap: wrap;
            }
          }
        `}
      </style>

      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-tag">ZORVEX'S</div>

          <h1 className="hero-title">
            Focus on Patients,
            <img src={leaf} alt="leaf" className="leaf-inline" />
            <br />
            We'll Handle the Revenue.
          </h1>

          <p className="hero-description">
            Helping healthcare teams spend less time on paperwork, so they can
            focus on delivering exceptional care to every patient they serve.
          </p>

          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={openPopup}>
              Get Started 
              <i className="bi bi-arrow-up-right"></i>
            </button>

            <a href="#about">
              <button className="hero-btn-secondary">
                Learn More <i className="bi bi-info-circle"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="hero-marquee">
          <div className="hero-marquee-track">
            <div className="hero-card">Medical Coding</div>
            <div className="hero-card">Claims Submission</div>
            <div className="hero-card">Insurance Verification</div>
            <div className="hero-card">Eligibility Verification</div>
            <div className="hero-card">Denial Management</div>
            <div className="hero-card">Revenue Analytics</div>
            <div className="hero-card">Patient Billing</div>
            <div className="hero-card">AR Follow Ups</div>
            <div className="hero-card">Payment Posting</div>
            <div className="hero-card">Claims Scrubbing</div>

            <div className="hero-card">Medical Coding</div>
            <div className="hero-card">Claims Submission</div>
            <div className="hero-card">Insurance Verification</div>
            <div className="hero-card">Eligibility Verification</div>
            <div className="hero-card">Denial Management</div>
            <div className="hero-card">Revenue Analytics</div>
            <div className="hero-card">Patient Billing</div>
            <div className="hero-card">AR Follow Ups</div>
            <div className="hero-card">Payment Posting</div>
            <div className="hero-card">Claims Scrubbing</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
