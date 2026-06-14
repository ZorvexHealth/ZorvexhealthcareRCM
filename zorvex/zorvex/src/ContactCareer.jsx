import leaf from "./assets/white-single-leaf.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function ContactCareer() {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    jobTitle: "",
    experience: "",
    interestedIn: "",
    state: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const sendCareerForm = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k8ejaxd",
        "template_kjcx7g4",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          job_title: formData.jobTitle,
          experience: formData.experience,
          interested_in: formData.interestedIn,
          state: formData.state,
          message: formData.message,
        },
        "J_U4-D_abH708jrJb",
      )
      .then(() => {
        setToast({
          show: true,
          message: "Application submitted successfully!",
          type: "success",
        });

        setTimeout(() => {
          setToast({
            show: false,
            message: "",
            type: "",
          });
        }, 3000);

        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          jobTitle: "",
          experience: "",
          interestedIn: "",
          state: "",
          message: "",
        });
      })
      .catch(() => {
        setToast({
          show: true,
          message: "Failed to submit application. Please try again.",
          type: "danger",
        });

        setTimeout(() => {
          setToast({
            show: false,
            message: "",
            type: "",
          });
        }, 3000);
      });
  };
  return (
    <>
      <style>
        {`
        .toast-custom{
  position:fixed;

  top:25px;
  right:25px;

  min-width:320px;

  z-index:99999;

  border-radius:12px;

  color:white;

  animation:slideIn .35s ease;

  box-shadow:0 12px 30px rgba(0,0,0,.2);
}

.toast-success{
  background:#3fa55b;
}

.toast-danger{
  background:#dc3545;
}

.toast-content{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:16px 20px;
}

.toast-content button{
  background:none;
  border:none;

  color:white;

  font-size:22px;

  cursor:pointer;
}

@keyframes slideIn{
  from{
    opacity:0;
    transform:translateX(100%);
  }
  to{
    opacity:1;
    transform:translateX(0);
  }
}
        .career-contact{
          background:#379b58;
          padding:100px 8%;
        }

        .career-contact-wrapper{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
          align-items:start;
        }

        .career-left{
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:700px;
        }

        .career-tag{
          color:white;
          font-size:16px;
          margin-bottom:10px;
        }

        .career-title{
  font-family:"Jomhuria", serif;
  font-size:95px;
  line-height:.85;

  color:white;

  margin-bottom:25px;

  display:flex;
  flex-direction:column;
}

.career-title-row{
  display:flex;
  align-items:flex-start;
  gap:12px;
}

.career-leaf{
  width:65px;
  height:auto;

  margin-top:12px;
}

        .career-description{
          color:white;
          opacity:.9;

          font-size:20px;
          line-height:1.8;

          max-width:500px;
        }

        .career-contact-info{
          color:white;
          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .career-contact-info div{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .career-social{
          display:flex;
          gap:18px;
          margin-top:10px;
        }

        .career-social i{
          color:white;
          font-size:20px;
          cursor:pointer;
          transition:.3s;
        }

        .career-social i:hover{
          transform:translateY(-3px);
        }

        .career-form{
          width:100%;
        }

        .career-row{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:15px;
          margin-bottom:18px;
        }

        .career-field{
          display:flex;
          flex-direction:column;
          gap:8px;
        }

        .career-field label{
          color:white;
          font-size:14px;
          font-weight:500;
        }

        .career-field select{
  width:100%;

  background:rgba(255,255,255,.28);
  color:white;

  border:none;
  outline:none;

  padding:14px 16px;

  border-radius:8px;

  appearance:none;
  -webkit-appearance:none;
  -moz-appearance:none;

  cursor:pointer;
}

.career-field select option{
  background:#ffffff;
  color:#333;
}
        .career-field input,
        .career-field textarea{
          width:100%;

          background:rgba(255,255,255,.28);

          border:none;
          outline:none;

          padding:14px 16px;

          border-radius:8px;

          color:white;
        }

        .career-field input::placeholder,
        .career-field textarea::placeholder{
          color:rgba(255,255,255,.75);
        }

        .career-field textarea{
          height:120px;
          resize:none;
        }

        .career-consent{
          margin-top:10px;
          color:white;
          font-size:15px;
        }

        .career-consent input{
          margin-right:8px;
        }

        .career-policy{
          margin-top:12px;
          color:white;
          font-size:15px;
        }

        .career-policy a{
          color:white;
          text-decoration:underline;
        }

        .career-submit{
          width:100%;

          margin-top:20px;

          border:none;
          border-radius:8px;

          background:white;
          color:#379b58;

          padding:15px;

          font-size:18px;
          font-weight:600;

          cursor:pointer;

          transition:.3s;
        }

        .career-submit:hover{
          transform:translateY(-3px);
        }

        @media(max-width:992px){

          .career-contact-wrapper{
            grid-template-columns:1fr;
          }

          .career-left{
            min-height:auto;
          }

          .career-title{
            font-size:70px;
          }
        }

        @media(max-width:768px){

          .career-row{
            grid-template-columns:1fr;
          }

          .career-title{
            font-size:58px;
          }

          .career-description{
            font-size:17px;
          }
        }
        `}
      </style>

      <section className="career-contact">
        <div className="career-contact-wrapper">
          <div className="career-left">
            <div>
              <div className="career-tag">GROW WITH US</div>

              <h2 className="career-title">
                <div className="career-line-one">
                  Build Your
                  <img src={leaf} alt="leaf" className="career-leaf" />
                </div>

                <div className="career-line-two">Future With Us</div>
              </h2>

              <p className="career-description">
                We're always excited to meet curious minds, creative thinkers,
                and passionate individuals. If you're ready for a new challenge,
                there's a place for you here.
              </p>
            </div>

            <div className="career-contact-info">
              <div>
                <i className="bi bi-envelope"></i>
                info@zorvexhealthcare.com
              </div>

              <div>
                <i className="bi bi-telephone"></i>
                +1 341 237 3271
              </div>

              <div className="career-social">
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter-x"></i>
              </div>
            </div>
          </div>

          <form className="career-form" onSubmit={sendCareerForm}>
            <div className="career-row">
              <div className="career-field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="career-field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="career-row">
              <div className="career-field">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="career-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="career-row">
              <div className="career-field">
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="career-field">
                <label>Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>Fresher</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>
            </div>

            <div className="career-row">
              <div className="career-field">
                <label>Interested In?</label>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>Internship</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                </select>
              </div>

              <div className="career-field">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="career-field">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="career-consent">
              <input type="checkbox" />I Consent to receive marketing messages
              from Zorvex Healthcare Solutions
            </div>

            <div className="career-policy">
              To Learn More, visit our{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>

            <button type="submit" className="career-submit">
              Submit
            </button>
          </form>
        </div>
        {toast.show && (
          <div
            className={`toast-custom ${
              toast.type === "success" ? "toast-success" : "toast-danger"
            }`}
          >
            <div className="toast-content">
              <span>{toast.message}</span>

              <button
                onClick={() =>
                  setToast({
                    show: false,
                    message: "",
                    type: "",
                  })
                }
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ContactCareer;
