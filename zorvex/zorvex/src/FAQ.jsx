import { useState } from "react";
import leaf from "./assets/white-single-leaf.png";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We offer end-to-end Revenue Cycle Management services including medical coding, claims submission, denial management, payment posting, AR follow-up, patient billing, and revenue optimization.",
    },
    {
      question: "Why should we choose your company?",
      answer:
        "At ZORVEX, we combine industry expertise, advanced technology, and a client-first approach to help healthcare organizations improve revenue performance, reduce denials, and streamline operations.",
    },
    {
      question: "How do you handle denied and rejected claims?",
      answer:
        "Our team proactively identifies denial trends, investigates root causes, and manages appeals efficiently to maximize reimbursements and reduce revenue leakage.",
    },
    {
      question: "How do you improve revenue performance?",
      answer:
        "We optimize every stage of the revenue cycle, helping providers increase collections, improve cash flow, and reduce administrative burdens.",
    },
    {
      question: "How do you ensure compliance and data security?",
      answer:
        "We follow HIPAA-compliant processes, implement strict security protocols, and maintain industry best practices to protect sensitive healthcare data.",
    },
    {
      question: "How quickly can we start service with you?",
      answer:
        "Our onboarding process is designed to be smooth and efficient, allowing most organizations to get started within a short timeframe.",
    },
  ];

  return (
    <>
      <style>
        {`
          .faq-section {
            background: #3fa55b;
            padding: 120px 8%;
          }

          .faq-container {
            max-width: 1400px;
            margin: auto;

            display: grid;
            grid-template-columns: 1fr 1.4fr;
            gap: 80px;
            align-items: center;
          }

          .faq-left {
            color: white;
          }

          .faq-tag {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }

          .faq-title {
            font-family: "Jomhuria", serif;
            font-size: 120px;
            line-height: 0.75;
            margin: 0;
            color: white;
          }

          .faq-leaf {
            height: 55px;
            margin-left: 8px;
            vertical-align: middle;
          }

          .faq-description {
            margin-top: 25px;
            color: rgba(255,255,255,.9);
            font-size: 18px;
            line-height: 1.7;
            max-width: 320px;
          }

          .faq-list {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .faq-item {
            background: white;
            border-radius: 14px;
            overflow: hidden;
            transition: .3s ease;
          }

          .faq-question {
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;

            background: white;
            border: none;

            padding: 20px 24px;

            cursor: pointer;

            font-size: 18px;
            font-weight: 500;
            text-align: left;
          }

          .faq-question-left {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .faq-icon {
            color: #3fa55b;
            font-size: 16px;
          }

          .faq-toggle {
            width: 28px;
            height: 28px;

            border-radius: 8px;

            background: #f1f1f1;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 18px;
            color: #3fa55b;
            font-weight: bold;
          }

          .faq-answer-wrapper {
            max-height: 0;
            overflow: hidden;
            transition: max-height .4s ease;
          }

          .faq-answer-wrapper.active {
            max-height: 250px;
          }

          .faq-answer {
            padding: 0 24px 24px 52px;
            color: #666;
            line-height: 1.8;
            font-size: 15px;
          }

          @media (max-width: 992px) {

            .faq-container {
              grid-template-columns: 1fr;
              gap: 50px;
            }

            .faq-title {
              font-size: 90px;
            }

            .faq-description {
              max-width: 100%;
            }

            .faq-question {
              font-size: 16px;
            }
          }
        `}
      </style>

      <section className="faq-section" id="faq-section">
        <div className="faq-container">

          <div className="faq-left">
            <div className="faq-tag">FAQs</div>

            <h2 className="faq-title">
              HAVE
              <img
                src={leaf}
                alt="leaf"
                className="faq-leaf mb-3"
              />
              <br />
              QUESTIONS?
            </h2>

            <p className="faq-description">
              Find answers to common questions about our services,
              process, and how we help healthcare organizations
              improve their revenue cycle performance.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="faq-question-left">
                    <i className="bi bi-info-circle faq-icon"></i>
                    {faq.question}
                  </div>

                  <div className="faq-toggle">
                    {openIndex === index ? "−" : "+"}
                  </div>
                </button>

                <div
                  className={`faq-answer-wrapper ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default FAQ;
