import leaf from "./assets/white-single-leaf.png";

import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact({ openPopup }) {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k8ejaxd",
        "template_2mx7g69",
        {
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
        },
        "J_U4-D_abH708jrJb",
      )
      .then(() => {
        setToast({
          show: true,
          message: "Message sent successfully!",
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
          name: "",
          email: "",
          organization: "",
          message: "",
        });
      })

      .catch(() => {
        setToast({
          show: true,
          message: "Failed to send message. Please try again.",
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
          .contact-section {
            padding: 100px 6%;
            background: #f5f5f5;
          }

          .contact-card {
            background: #3fa55b;
            border-radius: 40px;

            max-width: 1400px;
            margin: auto;

            padding: 70px;

            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 80px;
          }

          .contact-left {
            color: white;
          }

          .contact-tag {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 15px;
          }

          .contact-title {
            font-family: "Jomhuria", serif;
            font-size: 95px;
            line-height: 0.8;
            margin: 0;
            color: white;
          }

          .contact-leaf {
            height: 55px;
            margin-left: 8px;
            vertical-align: middle;
          }

          .contact-description {
            margin-top: 25px;
            max-width: 420px;

            color: rgba(255,255,255,.9);

            font-size: 18px;
            line-height: 1.7;
          }

          .contact-info {
            margin-top: 40px;

            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;

            color: white;
            font-size: 18px;
          }

          .contact-item i {
            margin-top: 3px;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .contact-form label {
            color: white;
            font-size: 15px;
            font-weight: 500;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;

            border: none;
            outline: none;

            background: white;

            padding: 18px 20px;

            border-radius: 10px;

            font-size: 15px;
          }

          .contact-form textarea {
            resize: none;
            min-height: 140px;
          }

          .contact-btn {
            border: none;

            background: white;
            color: #3fa55b;

            padding: 16px;

            border-radius: 10px;

            font-size: 18px;
            font-weight: 600;

            cursor: pointer;

            transition: .3s ease;
          }

          .contact-btn:hover {
            transform: translateY(-3px);

            box-shadow: 0 12px 25px rgba(0,0,0,.15);
          }

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

          /* CTA */

          .contact-cta {
            text-align: center;
            padding-top: 100px;
          }

          .contact-cta h2 {
            font-family: "Jomhuria", serif;

            font-size: 120px;
            line-height: 0.85;

            color: black;

            margin-bottom: 40px;
          }

          .cta-btn {
            border: none;

            background: #3fa55b;
            color: white;

            padding: 22px 45px;

            border-radius: 18px;

            font-size: 22px;
            font-weight: 600;

            cursor: pointer;

            transition: .3s ease;
          }

          .cta-btn:hover {
            transform: translateY(-3px);

            background: #36914f;

            box-shadow: 0 15px 30px rgba(0,0,0,.15);
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
        .career-social a{
  display:inline-block;
  transition:transform .3s ease;
}

.career-social a:hover{
  transform:translateY(-3px);
}



          @media(max-width: 992px){

            .contact-card{
              grid-template-columns: 1fr;
              padding: 40px;
              gap: 40px;
            }

            .contact-title{
              font-size: 70px;
            }

            .contact-cta h2{
              font-size: 80px;
            }

            
          }
        `}
      </style>

      <section id="contact" className="contact-section">
        <div className="contact-card">
          <div className="contact-left">
            <div className="contact-tag">CONTACT ZORVEX</div>

            <h2 className="contact-title">
              Let's Start a
              <img src={leaf} alt="leaf" className="contact-leaf mb-3" />
              <br />
              Conversation
            </h2>

            <p className="contact-description">
              Have a question or need support? We'd love to hear from you and
              learn how we can help your organization succeed.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <span>info@zorvexhealthcare.com</span>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <span>+1 341 237 3271</span>
              </div>
              <div className="career-social">
                <a
  href="https://www.linkedin.com/company/zorvexhealthcare/"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-linkedin"></i>
</a>

<a
  href="https://www.instagram.com/zorvexhealthcare/"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-instagram"></i>
</a>

<a
  href="https://www.facebook.com/profile.php?id=61590586995650&mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-facebook"></i>
</a>

<a
  href="https://x.com/wearezorvex"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-twitter-x"></i>
</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <div>
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Organization *</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>How can we help you today? *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-cta">
          <h2>
            Let's Build A Stronger Revenue
            <br />
            Cycle Together.
          </h2>

          <button className="cta-btn" onClick={openPopup}>
            GET STARTED <i className="bi bi-arrow-up-right"></i>
          </button>
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

export default Contact;
