import heroBg from "./assets/hero-career-bg.png";
import leaf from "./assets/white-single-leaf.png";

function HeroCareer() {
  return (
    <>
      <style>
        {`
          .career-hero {
            min-height: 100vh;
            width: 100%;

            display: flex;
            align-items: center;

            padding: 0 7%;

            background-image:
              linear-gradient(
                rgba(0,0,0,.12),
                rgba(0,0,0,.18)
              ),
              url(${heroBg});

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            position: relative;
          }

          .career-content {
            max-width: 850px;
            margin-top: 140px;
          }

          .career-tag {
            color: #ffffff !important;
            opacity: 1 !important;
            font-size: 22px;
            font-weight: 500;
            

            margin-bottom: 12px;

            text-shadow:
              0 2px 12px rgba(0,0,0,.35);
          }

          .career-heading {
            display: flex;
            align-items: center;
            gap: 12px;

            margin: 0;

            font-family: "Jomhuria", serif;
            font-size: 170px;
            line-height: .72;

            color: #ffffff;

            text-shadow:
              0 4px 20px rgba(0,0,0,.35);
          }

          .career-leaf {
            width: 90px;
            height: auto;

            margin-top: -10px;
            flex-shrink: 0;
          }

          .career-description {
            margin-top: 25px;

            max-width: 780px;

            color: #ffffff !important;
            opacity: 1 !important;

            font-size: 22px;
            line-height: 1.7;
            font-weight: 400;

            text-shadow:
              0 2px 12px rgba(0,0,0,.35);
          }

          .career-buttons {
            display: flex;
            gap: 18px;

            margin-top: 40px;
          }

          .career-btn-primary {
            background: #3fa55b;
            color: white;

            border: none;
            border-radius: 14px;

            padding: 15px 28px;

            font-size: 15px;
            font-weight: 600;

            cursor: pointer;

            transition: .3s ease;
          }

          .career-btn-primary:hover {
            background: #36914f;
            transform: translateY(-2px);
          }

          .career-btn-secondary {
            background: rgba(255,255,255,.15);

            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);

            border: 1px solid rgba(255,255,255,.25);

            color: white;

            border-radius: 14px;

            padding: 15px 28px;

            font-size: 15px;
            font-weight: 600;

            cursor: pointer;

            transition: .3s ease;
          }

          .career-btn-secondary:hover {
            background: rgba(255,255,255,.22);
            transform: translateY(-2px);
          }

          @media (max-width: 992px) {

            .career-heading {
              font-size: 120px;
            }

            .career-description {
              font-size: 18px;
            }

            .career-leaf {
              width: 65px;
            }
          }

          @media (max-width: 768px) {

            .career-content {
              margin-top: 100px;
            }

            .career-tag {
              font-size: 18px;
            }

            .career-heading {
              font-size: 85px;
              gap: 8px;
            }

            .career-leaf {
              width: 45px;
            }

            .career-description {
              font-size: 16px;
              line-height: 1.6;
            }

            .career-buttons {
              flex-direction: column;
            }
          }
        `}
      </style>

      <section className="career-hero">
        <div className="career-content mt-0">
          <div className="career-tag">Career</div>

          <h1 className="career-heading">
            Work with us.
            <img src={leaf} alt="leaf" className="career-leaf" />
          </h1>

          <p className="career-description">
            We’re building more than a company. We’re building a team of people
            who support one another, grow together, and make a real difference
            in healthcare.
          </p>
        </div>
      </section>
    </>
  );
}

export default HeroCareer;
