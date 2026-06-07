import { useNavigate } from "react-router-dom";
import NavCareer from "./NavCareer";

function PrivacyPolicy() {
  const navigate = useNavigate();

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
        <NavCareer></NavCareer>

        <div className="privacy-card ">
          <h1 className="privacy-title">Privacy Policy</h1>

          <p className="privacy-intro">
            Zorvex Healthcare Solutions ("Zorvex", "we", "our", or "us") is
            committed to protecting the privacy and security of the information
            entrusted to us. This Privacy Policy explains how we collect, use,
            store, disclose, and safeguard information submitted through our
            website, client communications, and service engagements. By
            accessing or using our website and services, you agree to the
            practices described in this Policy.
          </p>

          <div className="privacy-section">
            <h3>Information We Collect</h3>

            <p>
              We collect information that you voluntarily provide through
              contact forms, client inquiries, and career applications. This may
              include your name, email address, phone number, organization
              details, professional experience, state or location, and other
              information you choose to share. In connection with our Revenue
              Cycle Management services, we may also process healthcare-related
              information, including claims data, insurance information, patient
              information, and Protected Health Information (PHI), where
              authorized by our clients and applicable agreements.
            </p>
          </div>

          <div className="privacy-section">
            <h3>How We Use Your Information</h3>

            <p>
              The information we collect helps us respond to inquiries, provide
              requested services, evaluate career opportunities, communicate
              with clients and prospective clients, improve our operations, and
              maintain the quality and security of our services. We may also use
              your information to send service updates, business communications,
              and marketing information related to our offerings.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Marketing Communications</h3>

            <p>
              From time to time, Zorvex Healthcare Solutions may send
              communications regarding our services, updates, industry insights,
              and business opportunities. You may request to stop receiving
              marketing communications at any time by contacting us through the
              information provided below.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Healthcare Information and HIPAA Compliance</h3>

            <p>
              As part of our Revenue Cycle Management services, Zorvex
              Healthcare Solutions may access, process, store, or transmit
              healthcare information on behalf of healthcare providers and
              organizations. We are committed to maintaining the confidentiality
              and security of healthcare information and implement reasonable
              administrative, technical, and physical safeguards designed to
              protect Protected Health Information. Where required, we may enter
              into Business Associate Agreements with clients in accordance with
              applicable healthcare regulations, including HIPAA requirements.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Information Sharing and Disclosure</h3>

            <p>
              Zorvex Healthcare Solutions does not sell personal information.
              Information may be shared with authorized employees, contractors,
              service providers, professional advisors, and regulatory
              authorities when necessary to provide services, comply with legal
              obligations, protect legitimate business interests, or respond to
              lawful requests.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Data Security</h3>

            <p>
              We take appropriate measures to protect information against
              unauthorized access, misuse, disclosure, alteration, or
              destruction. While we strive to use commercially reasonable
              safeguards and security practices, no method of transmission over
              the internet or electronic storage system can guarantee absolute
              security.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Data Retention</h3>

            <p>
              Information is retained only as long as necessary for legitimate
              business purposes and compliance obligations. Contact inquiries
              may be retained for up to five years. Career application
              information may be retained for up to three years to facilitate
              future opportunities. Client communications and engagement-related
              records may be retained for the duration of the business
              relationship and for up to seven years thereafter.
            </p>
          </div>

          <div className="privacy-section">
            <h3>International Data Processing</h3>

            <p>
              Zorvex Healthcare Solutions serves healthcare organizations that
              may operate across different jurisdictions, including India and
              the United States. Information provided to us may be processed,
              stored, or transferred in accordance with applicable laws
              governing our operations and service delivery.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Your Rights</h3>

            <p>
              Depending on applicable laws, you may have the right to request
              access to your information, request corrections, request deletion
              of information, or object to certain processing activities.
              Requests may be submitted using the contact information provided
              below, and we will make reasonable efforts to address such
              requests in accordance with applicable legal requirements.
            </p>
          </div>

          <div className="privacy-section">
            <h3>Updates to This Privacy Policy</h3>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our business practices, legal obligations, or service
              offerings. Updated versions will become effective upon publication
              on our website.
            </p>
          </div>
          <div className="privacy-section">
            <h3>Contact Information</h3>

            <p>
              If you have questions regarding this Privacy Policy, healthcare
              data protection practices, or requests related to your
              information, you may contact Zorvex Healthcare Solutions at
              info@zorvexhealthcare.com or call +1 341 237 3271.
            </p>
          </div>
          <div className="privacy-section">
            <h3>Disclaimer</h3>

            <p>
              © 2026 Zorvex Healthcare Solutions. All rights reserved. <br></br>Zorvex
              Healthcare Solutions provides Revenue Cycle Management (RCM) and
              related healthcare administrative support services. Information
              provided on this website is for general informational purposes
              only and does not constitute medical, legal, financial, or
              professional advice. Use of this website does not create a client
              relationship unless expressly agreed upon in writing. By accessing
              this website, you agree to our Privacy Policy and Terms &
              Conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
