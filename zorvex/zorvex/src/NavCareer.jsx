import { useNavigate } from "react-router-dom";
import logo from "./assets/zorvex-logo-green.png";

function NavCareer() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .privacy-nav{
            position:fixed;
            top:20px;
            left:50%;
            transform:translateX(-50%);
            display:flex;
            justify-content:center;
            align-items:center;
            margin-bottom:30px;
            z-index:9999;
          }

          .privacy-nav-inner{
                       background: rgba(255, 255, 255, 0.85);

            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);

            border: 1px solid rgba(0, 0, 0, 0.06);

            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

            border-radius:12px;

            padding:10px 18px;

            display:flex;
            align-items:center;
            justify-content:space-between;

            width:420px;

            box-shadow:0 10px 25px rgba(0,0,0,.08);
          }

          .privacy-logo{
            height:30px;
            width:auto;
          }

          .privacy-back-btn{
            border:none;
            background:#379b58;

            color:white;

            padding:8px 14px;

            border-radius:8px;

            cursor:pointer;

            font-size:13px;
            font-weight:600;

            transition:.3s ease;
          }

          .privacy-back-btn:hover{
            background:#2f864b;
            transform:translateY(-2px);
          }
        `}
      </style>

      <div className="privacy-nav">
        <div className="privacy-nav-inner mx-5">
          <img src={logo} alt="Zorvex" className="privacy-logo" />

          <button className="privacy-back-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default NavCareer;
