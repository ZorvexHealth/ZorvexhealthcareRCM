import logo from "./assets/zorvex-logo-white.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background: #3fa55b;
            color: white;

            padding: 70px 8% 40px;
          }

          .footer-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            max-width: 1400px;
            margin: auto;
          }

          .footer-logo {
            height: 45px;
            margin-bottom: 20px;
          }

          .footer-links {
            display: flex;
            gap: 30px;
            margin-top: 10px;
          }

          .footer-links a {
            color: white;
            text-decoration: none;

            font-size: 14px;
            font-weight: 500;

            transition: .3s;
          }

          .footer-links a:hover {
            opacity: .8;
          }

          .footer-right {
            text-align: right;
          }

          .footer-right p {
            margin: 0 0 12px;
            font-size: 14px;
          }

          .social-icons {
            display: flex;
            justify-content: flex-end;
            gap: 20px;
            margin-top: 15px;
          }

          .social-icons a {
            color: white;
            font-size: 18px;

            transition: .3s;
          }

          .social-icons a:hover {
            transform: translateY(-2px);
            opacity: .8;
          }

          .footer-divider {
            margin: 40px auto 30px;
            border: none;
            height: 1px;
            background: rgba(255,255,255,.25);

            max-width: 1400px;
          }

          .footer-bottom {
            max-width: 1400px;
            margin: auto;

            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .footer-bottom-left {
            display: flex;
            gap: 20px;
            align-items: center;
          }

          .footer-bottom-left a {
            color: white;
            text-decoration: none;
            font-size: 14px;
          }

          .footer-bottom-right {
            font-size: 14px;
          }

          @media(max-width:768px){

            .footer-top{
              flex-direction: column;
              gap: 30px;
            }

            .footer-right{
              text-align: left;
            }

            .social-icons{
              justify-content: flex-start;
            }

            .footer-bottom{
              flex-direction: column;
              gap: 20px;
              align-items: flex-start;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <img src={logo} alt="Zorvex" className="footer-logo" />

            <div className="footer-links">
              <a href="#about">ABOUT</a>
              <a href="/career" target="_blank" rel="noreferrer">
                CAREER
              </a>
              <a href="#faq-section">FAQ</a>
              <a href="#contact">CONTACT US</a>
            </div>
          </div>

          <div className="footer-right">
            <p>info@zorvexhealthcare.com</p>

            <p>+1 341 237 3271</p>

            <div className="social-icons">
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              {/* X (Twitter) */}
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>

          <div className="footer-bottom-right">
            Design with love © Hippocreates. All right reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
