import NavCareer from "./NavCareer";

function TermsAndConditions() {
  return (
    <>
      <style>
        {`
.privacy-page{
  min-height:100vh;
  background:#379b58;
  padding:20px;
}

.privacy-card{
  max-width:900px;
  margin:auto;
  margin-top:100px;
  margin-bottom:100px;

  background:#f7f7f7;

  border-radius:32px;

  padding:50px;

  box-shadow:0 15px 40px rgba(0,0,0,.12);
}

.privacy-title{
  text-align:center;
  font-size:42px;
  font-weight:700;
  margin-bottom:25px;
}

.privacy-intro{
  color:#555;
  line-height:1.8;
  margin-bottom:30px;
}

.privacy-section{
  margin-bottom:28px;
}

.privacy-section h3{
  font-size:24px;
  margin-bottom:10px;
  color:#111;
}

.privacy-section p{
  color:#555;
  line-height:1.8;
}

@media(max-width:768px){

  .privacy-card{
    padding:25px;
  }

  .privacy-title{
    font-size:30px;
  }
}
`}
      </style>

      <section className="privacy-page">
        <NavCareer />

        <div className="privacy-card">
          <h1 className="privacy-title">Terms & Conditions</h1>

          <p className="privacy-intro">
            Welcome to Zorvex Healthcare Solutions. By accessing or using our
            website and services, you agree to comply with and be bound by the
            following Terms and Conditions. These Terms govern your use of our
            website, communications, and services. If you do not agree with any
            part of these Terms, please discontinue use of the website and
            related services.
          </p>

          <div className="privacy-section">
            <h3>Acceptance of Terms</h3>

            <p>
              By accessing or using the website and services of Zorvex
              Healthcare Solutions, you agree to be bound by these Terms and
              Conditions. If you do not agree with any part of these Terms, you
              should discontinue use of the website and related services.
            </p>
          </div>

          <div className="privacy-section">
            <h3>About Our Services</h3>

            <p>
              Zorvex Healthcare Solutions provides Revenue Cycle Management and
              healthcare administrative support services, including medical
              billing, medical coding, accounts receivable follow-up, denial
              management, credentialing, eligibility verification, prior
              authorization, and related operational support services for
              healthcare organizations.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Website Usage</h3>

            <p>
              Users are expected to use the website responsibly and lawfully.
              You agree not to engage in activities that interfere with website
              functionality, attempt unauthorized access, transmit harmful
              software, submit false information, or otherwise violate
              applicable laws and regulations while using the website.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Intellectual Property Rights</h3>

            <p>
              All content available on this website, including text, graphics,
              logos, branding elements, designs, layouts, and other materials,
              is owned by or licensed to Zorvex Healthcare Solutions. Such
              content may not be copied, reproduced, distributed, modified, or
              used without prior written permission.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Client Relationships</h3>

            <p>
              Submission of an inquiry, form, email, or other communication
              through the website does not create a client relationship. A
              formal client relationship exists only when both parties enter
              into an appropriate written agreement.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Career Opportunities</h3>

            <p>
              Information submitted through the career section of the website
              may be reviewed for current and future opportunities. While we
              appreciate every application, submission of information does not
              guarantee employment, internship placement, interviews, or future
              engagement.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Healthcare Data Responsibilities</h3>

            <p>
              Clients remain responsible for ensuring that information provided
              to Zorvex Healthcare Solutions is lawfully obtained and shared.
              Both parties are expected to maintain confidentiality and comply
              with applicable healthcare privacy and security obligations
              related to patient and healthcare information.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Disclaimer of Warranties</h3>

            <p>
              The website and its content are provided on an "as is" and "as
              available" basis. While we strive to provide accurate and reliable
              information, Zorvex Healthcare Solutions makes no guarantees
              regarding uninterrupted availability, accuracy, completeness, or
              suitability of the website or its content for any particular
              purpose.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Limitation of Liability</h3>

            <p>
              To the fullest extent permitted by law, Zorvex Healthcare
              Solutions shall not be liable for any indirect, incidental,
              consequential, special, or punitive damages arising from the use
              of the website, reliance on its content, or interruption of
              services.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Indemnification</h3>

            <p>
              Users agree to indemnify and hold harmless Zorvex Healthcare
              Solutions, its employees, contractors, and affiliates from claims,
              liabilities, damages, losses, or expenses arising from misuse of
              the website or violation of these Terms and Conditions.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Governing Law</h3>

            <p>
              These Terms and Conditions shall be governed and interpreted in
              accordance with applicable laws of India and, where relevant to
              client engagements, applicable healthcare and business regulations
              of the United States.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Jurisdiction</h3>

            <p>
              Any disputes arising out of or relating to the use of this website
              or services shall be subject to the exclusive jurisdiction of the
              courts located in Chennai, Tamil Nadu, India.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Contact Information</h3>

            <p>
              Questions regarding these Terms and Conditions may be directed to
              Zorvex Healthcare Solutions at info@zorvexhealthcare.com or +1
              3412373271.
            </p>
          </div>
          <div className="privacy-section">
            <h3>Disclaimer</h3>

            <p>
              © 2026 Zorvex Healthcare Solutions. All rights reserved. <br></br>
              Zorvex Healthcare Solutions provides Revenue Cycle Management
              (RCM) and related healthcare administrative support services.
              Information provided on this website is for general informational
              purposes only and does not constitute medical, legal, financial,
              or professional advice. Use of this website does not create a
              client relationship unless expressly agreed upon in writing. By
              accessing this website, you agree to our Privacy Policy and Terms
              & Conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsAndConditions;
