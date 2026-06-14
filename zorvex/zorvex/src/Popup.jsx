import { useState } from "react";
import emailjs from "@emailjs/browser";

import whiteLeaf from "./assets/big-white-leaf.png";
import singleLeaf from "./assets/white-single-leaf.png";

function Popup({ closePopup }) {
  const SERVICE_ID = "service_k8ejaxd";
  const TEMPLATE_ID = "template_2mx7g69";
  const PUBLIC_KEY = "J_U4-D_abH708jrJb";

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    challenge: "",
  });

  const handleNext = () => {
    if (step === 1 && formData.name.trim()) {
      setTimeout(() => setStep(2), 80);
    }

    if (step === 2 && formData.organization.trim()) {
      setTimeout(() => setStep(3), 80);
    }

    if (step === 3 && formData.email.trim()) {
      setTimeout(() => setStep(4), 80);
    }
  };

  const handleSubmit = async () => {
    if (!formData.challenge.trim()) return;

    try {
      setLoading(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          organization: formData.organization,
          email: formData.email,
          challenge: formData.challenge,
        },
        PUBLIC_KEY,
      );

      setSubmitted(true);

      setTimeout(() => {
        closePopup();
      }, 3000);
    } catch (error) {
      console.error(error);

      alert("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "";

      case 2:
        return formData.organization.trim() !== "";

      case 3:
        return formData.email.trim() !== "";

      default:
        return false;
    }
  };

  return (
    <>
      <style>
        {`
        .popup-overlay{
          position:fixed;
          inset:0;

          display:flex;
          justify-content:center;
          align-items:center;

          background:rgba(0,0,0,.15);

          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);

          z-index:999999;
        }

        .popup-container{
          width:90%;
          max-width:1200px;
          height:82vh;

          position:relative;

          overflow:visible;

          border-radius:35px;

          background: #3fa55b;

          backdrop-filter:blur(40px);
          -webkit-backdrop-filter:blur(40px);

          border:1px solid rgba(255,255,255,.25);

          box-shadow:
          0 20px 80px rgba(0,0,0,.18);
        }

        .popup-close{
          position:absolute;
          top:28px;
          right:28px;

          background:none;
          border:none;

          color:white;

          font-size:42px;

          cursor:pointer;

          z-index:20;
        }

        .popup-content{
          height:100%;

          display:flex;
          flex-direction:column;

          align-items:center;
        }

        .popup-header{
          margin-top:70px;
          width:50%;
        }

        .popup-tag{
          color:white;
          font-size:12px;
          font-weight:600;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .popup-title-row{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .popup-title{
          font-family:"Jomhuria", serif;
          color:white;

          font-size:90px;
          line-height:.8;

          margin:10px 0;
        }

        .single-leaf{
          height:70px;
        }

        .popup-description{
          color:rgba(255,255,255,.85);

          font-size:18px;

          max-width:650px;
        }

        .question-wrapper{
          width:60%;

          margin-top:110px;

          display:flex;
          align-items:center;
          justify-content:center;

          gap:50px;
        }

        .question-area{
          flex:1;
        }

        .question{
          color:white;
          text-align:center;

          font-size:22px;
          font-weight:500;

          margin-bottom:15px;
        }

        .question-input{
          width:100%;

          background:transparent;

          border:none;
          border-bottom:2px solid rgba(255,255,255,.5);

          color:white;

          font-size:20px;

          text-align:center;

          padding:10px;
          outline:none;
        }

        .question-input::placeholder{
          color:rgba(255,255,255,.5);
        }

        .next-btn{
          width:58px;
          height:58px;

          border:none;

          border-radius:10px;

          background:white;

          color:#3fa55b;

          font-size:40px;

          cursor:pointer;

          transition:.3s;
        }

        .next-btn:hover{
          transform:translateY(-3px);
        }

        .next-btn:disabled{
          opacity:.4;
          cursor:not-allowed;
        }

        .challenge-area{
  width:520px;
  max-width:55%;

  position:absolute;
  top:60%;
  left:50%;
  transform:translate(-50%,-50%);

  display:flex;
  flex-direction:column;
  align-items:center;
}

        .challenge-text{
          width:100%;
          height:160px;

          resize:none;

          background:rgba(255,255,255,.08);

          border:1px solid rgba(255,255,255,.2);

          border-radius:18px;

          padding:20px;

          color:white;

          font-size:17px;

          outline:none;
        }

        .challenge-text::placeholder{
          color:rgba(255,255,255,.6);
        }

        .submit-btn{
          margin-top:25px;

          width:100%;

          border:none;

          padding:16px;

          border-radius:14px;

          background:white;

          color:#3fa55b;

          font-weight:700;

          font-size:16px;

          transition:.3s;

          cursor:pointer;
        }

        .submit-btn:hover{
          transform:translateY(-3px);
        }

        .thank-you{
          height:100%;

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

          text-align:center;

          color:white;
        }

        .thank-you h2{
          font-family:"Jomhuria", serif;
          font-size:110px;
          margin:0;
          line-height:.8;
        }

        .thank-you p{
          font-size:24px;
          max-width:600px;
        }

        .bottom-leaf{
          position:absolute;

          left:-30px;
          bottom:-1px;

          width:300px;
          z-index:5;

          pointer-events:none;
        }
        .question-screen{
  position:absolute;

  top:40%;
  left:50%;

  transform:translate(-50%,-50%);

  width:65%;
     display:flex;
  justify-content:center;
  align-items:center;
  animation:slideFade .45s cubic-bezier(.16,1,.3,1);
}

@keyframes slideFade{

  from{
    opacity:0;
    transform:
      translate(-50%,-50%)
      translateY(30px);
  }

  to{
    opacity:1;
    transform:
      translate(-50%,-50%)
      translateY(0);
  }
}
        @media(max-width:768px){

          .popup-title{
            font-size:70px;
          }

          .popup-header{
            width:85%;
          }
        }
          .question-wrapper{
  position:absolute;

  top:58%;
  left:50%;

  transform:translate(-50%,-50%);

  width:65%;

  display:flex;
  align-items:center;
  justify-content:center;

  gap:60px;
}

          .challenge-area{
  position:absolute;

  top:58%;
  left:50%;

  transform:translate(-50%,-50%);

  width:65%;
}
        `}
      </style>

      <div className="popup-overlay">
        <div className="popup-container">
          <button className="popup-close" onClick={closePopup}>
            ×
          </button>

          {!submitted ? (
            <div className="popup-content">
              <div className="popup-header">
                <div className="popup-tag">GET STARTED</div>

                <div className="popup-title-row">
                  <h1 className="popup-title">Reach out today.</h1>

                  <img src={singleLeaf} alt="" className="single-leaf mb-4" />
                </div>

                <div className="popup-description">
                  Every claim matters. We help healthcare providers improve
                  accuracy, reduce delays, and build stronger financial
                  outcomes.
                </div>
              </div>

              {step === 1 && (
                <div className="question-screen">
                  <div className="question-wrapper">
                    <div className="question-area">
                      <div className="question">What's your name?</div>

                      <input
                        className="question-input"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      className="next-btn"
                      disabled={!canProceed()}
                      onClick={handleNext}
                    >
                      ›
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="question-screen">
                  <div className="question-wrapper">
                    <div className="question-area">
                      <div className="question">
                        Which healthcare organization do you represent?
                      </div>

                      <input
                        className="question-input"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      className="next-btn"
                      disabled={!canProceed()}
                      onClick={handleNext}
                    >
                      ›
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="question-screen">
                  <div className="question-wrapper">
                    <div className="question-area">
                      <div className="question">
                        What's the best email to reach you?
                      </div>

                      <input
                        type="email"
                        className="question-input"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      className="next-btn"
                      disabled={!canProceed()}
                      onClick={handleNext}
                    >
                      ›
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="challenge-area">
                  
                  <textarea
                    className="challenge-text"
                    placeholder="Tell us a little about your current challenges..."
                    value={formData.challenge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        challenge: e.target.value,
                      })
                    }
                  />

                  <button
                    className="submit-btn"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              )}

              <img src={whiteLeaf} alt="" className="bottom-leaf" />
            </div>
          ) : (
            <div className="thank-you">
              <h2>Thank You</h2>

              <p>
                Thank you for letting us know. We'll reach out shortly and learn
                more about how we can help.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Popup;
