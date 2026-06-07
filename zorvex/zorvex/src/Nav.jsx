import logo from "./assets/zorvex-logo-green.png";

function Nav({ openPopup }) {
  return (
    <>
      <style>
        {`
          .zvx-navbar {
            position: fixed;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);

            width: 65%;
            max-width: 950px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 10px 20px;

            border-radius: 16px;

           background: rgba(255, 255, 255, 0.85);

            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);

            border: 1px solid rgba(0, 0, 0, 0.06);

            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

            z-index: 9999;
          }

          .zvx-logo {
            display: flex;
            align-items: center;
          }

          .zvx-logo-img {
            height: 32px;
            width: auto;
            object-fit: contain;
          }

          .zvx-links {
            color: white;
            display: flex;
            align-items: center;
            gap: 28px;
          }

          .zvx-links a {
            text-decoration: none;
            color: black;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .zvx-links a:hover {
            color: #2d7d44;
          }

          .zvx-btn {
            background: #3fa55b;
            color: white;

            border: none;
            border-radius: 10px;

            padding: 10px 18px;

            font-size: 13px;
            font-weight: 600;

            cursor: pointer;

            display: flex;
            align-items: center;
            gap: 6px;

            transition: all 0.3s ease;
          }

          .zvx-btn:hover {
            background: #36914f;
            transform: translateY(-2px);
          }

          .zvx-btn i {
            font-size: 12px;
          }

          @media (max-width: 992px) {

            .zvx-navbar {
              width: 95%;
              padding: 10px 15px;
            }

            .zvx-links {
              display: none;
            }

            .zvx-logo-img {
              height: 28px;
            }

            .zvx-btn {
              padding: 8px 14px;
              font-size: 12px;
            }
          }
        `}
      </style>

      <nav className="zvx-navbar">
        <div className="zvx-logo">
          <img src={logo} alt="Zorvex" className="zvx-logo-img" />
        </div>

        <div className="zvx-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <a href="/career" target="_blank" rel="noopener noreferrer">
            Career
          </a>
        </div>

        <button className="zvx-btn" onClick={openPopup}>
          GET STARTED
          <i className="bi bi-arrow-up-right"></i>
        </button>
      </nav>
    </>
  );
}

export default Nav;
