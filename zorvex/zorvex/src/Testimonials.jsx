function Testimonials() {
  return (
    <>
      <style>
        {`
          .testimonials {
            padding: 100px 20px;
          }

          .testimonials-title {
            text-align: center;
            font-size: 3rem;
            font-weight: 700;
            color: #8b8f97;
            margin-bottom: 60px;
          }

          .testimonials-grid {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
          }

          .testimonial-card {
            width: 320px;
            min-height: 260px;
            background: #c8f5b7;
            border-radius: 18px;
            padding: 28px;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,.08)
          }

          .testimonial-card:hover {
            transform: translateY(-8px);
          }

          .testimonial-name {
            font-size: 20px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 4px;
          }

          .testimonial-role {
            font-size: 15px;
            color: #111827;
            margin-bottom: 28px;
          }

          .testimonial-text {
            font-size: 16px;
            line-height: 1.5;
            color: #222;
          }

          @media (max-width: 992px) {
            .testimonials-grid {
              flex-direction: column;
              align-items: center;
            }

            .testimonial-card {
              width: 100%;
              max-width: 400px;
            }
          }
        `}
      </style>

      <section className="testimonials">
        <h2 className="testimonials-title">TESTIMONIALS</h2>

        <div className="testimonials-grid">

          <div className="testimonial-card">
            <div className="testimonial-name">
              Dr. Sarah Mitchell
            </div>

            <div className="testimonial-role">
              OBGYN Practice Manager
            </div>

            <div className="testimonial-text">
              "ZORVEX completely transformed our revenue cycle
              operations. Their billing accuracy and proactive
              claims management significantly reduced denials
              and improved our monthly collections."
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-name">
              Michael Anderson
            </div>

            <div className="testimonial-role">
              Healthcare Operations Director
            </div>

            <div className="testimonial-text">
              "The ZORVEX team is highly responsive,
              professional, and incredibly detail-oriented.
              Their streamlined workflows improved
              reimbursement turnaround times and simplified
              our billing processes."
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-name">
              Jennifer Collins
            </div>

            <div className="testimonial-role">
              Denial Prevention Manager
            </div>

            <div className="testimonial-text">
              "Before partnering with ZORVEX, managing claim
              denials was a constant challenge. Their expertise
              and technology-driven solutions helped us improve
              approval rates and optimize cash flow."
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Testimonials;