import { useNavigate } from "react-router-dom";

function BackToHome() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <>
      <style>
        {`
        .back-home{
          padding:120px 20px;
          background:#f7f7f7;
          text-align:center;
        }

        .back-home-title{
          font-family:"Jomhuria", serif;
          font-size:90px;
          line-height:.8;
          color:#000;

          margin-bottom:35px;
        }

        .back-home-btn{
          background:#379b58;
          color:white;

          border:none;
          border-radius:16px;

          padding:18px 36px;

          font-size:22px;
          font-weight:600;

          cursor:pointer;

          transition:.3s ease;
        }

        .back-home-btn:hover{
          transform:translateY(-3px);
          background:#2f8c4f;
        }

        @media(max-width:768px){

          .back-home-title{
            font-size:60px;
          }

          .back-home-btn{
            font-size:18px;
            padding:15px 28px;
          }
        }
        `}
      </style>

      <section className="back-home">
        <h2 className="back-home-title">
          Are You Looking for Our
          <br />
          Services Instead?
        </h2>

        <button className="back-home-btn" onClick={handleBackHome}>
          Back To Home <i className="bi bi-arrow-up-right"></i>
        </button>
      </section>
    </>
  );
}

export default BackToHome;
