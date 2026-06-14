import leaf from "./assets/green-single-leaf.png";

const services = [
  {
    title: "End-to-End RCM",
    description:
      "We take care of the complete billing and reimbursement process behind the scenes, helping healthcare providers reduce administrative burdens and maintain a healthier cash flow.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
  },
  {
    title: "Faster Reimbursements",
    description:
      "Faster payment starts with smarter processes. We optimize every step of the reimbursement journey to reduce bottlenecks and improve revenue performance.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
  {
    title: "Accurate Medical Coding",
    description:
      "Small coding errors can lead to big revenue losses. Our certified coders ensure claims are submitted correctly the first time.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
  },
  {
    title: "Streamlined Billing",
    description:
      "Billing shouldn't be a constant source of frustration. We handle the details and minimize delays so you can focus on patient care.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    title: "Reduced Claim Denials",
    description:
      "We identify and address the root causes of claim denials, helping healthcare providers improve approval rates and strengthen revenue.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800",
  },
  {
    title: "HIPAA Compliance & Security",
    description:
      "Trust is essential in healthcare. Through secure processes and compliance standards, we keep patient information protected.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
  },
  {
    title: "Technology-Driven Solutions",
    description:
      "Technology should make healthcare operations easier, not more complicated. Our advanced tools improve visibility and performance.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
];

function Aboutus() {
  return (
    <>
      <style>
        {`
        .about-section{
          padding:120px 7%;
          background:#f7f7f7;
        }

        .about-header{
          margin-bottom:80px;
        }

        .about-tag{
          color:#3fa55b;
          font-size:14px;
          font-weight:600;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .about-title{
          display:flex;
          align-items:center;
          gap:12px;

          font-family:"Jomhuria", serif;
          font-size:90px;
          line-height:.8;

          margin:10px 0;
          color:#000;
        }

        .about-leaf{
          height:55px;
        }

        .about-subtitle{
          color:#777;
          font-size:16px;
        }

        .cards-wrapper{
          position:relative;
        }

        .service-card{
          position:sticky;
          top:60px;

          background:white;

          border-radius:28px;

          padding:30px;

          margin-bottom:120px;

          min-height:420px;

          display:grid;
          grid-template-columns:1fr 1fr;
          gap:40px;

          align-items:center;

          border:1px solid #eee;

          box-shadow:
          0 10px 40px rgba(0,0,0,.05);
        }

        .service-content{
          padding:20px;
        }

        .service-title{
          font-size:42px;
          font-weight:700;
          margin-bottom:20px;
          color:#111;
        }

        .service-description{
          font-size:20px;
          line-height:1.7;
          color:#555;
        }

        .service-image{
          width:100%;
          height:320px;

          border-radius:20px;

          object-fit:cover;
        }

        @media(max-width:992px){

          .service-card{
            grid-template-columns:1fr;
            min-height:auto;
          }

          .service-title{
            font-size:30px;
          }

          .service-description{
            font-size:17px;
          }

          .about-title{
            font-size:70px;
          }

          .service-image{
            height:250px;
          }
        }
      `}
      </style>

      <section id="about" className="about-section">
        <div className="about-header">
          <div className="about-tag">ABOUT ZORVEX</div>

          <h2 className="about-title">
            WHO ARE WE?
            <img src={leaf} alt="leaf" className="about-leaf mb-4" />
          </h2>

          <p className="about-subtitle">
            Helping healthcare providers thrive, through smarter RCM.
          </p>
        </div>

        <div className="cards-wrapper">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{
                top: `${60 + index * 35}px`,
                zIndex: index + 1,
              }}
            >
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>

                <p className="service-description">{service.description}</p>
              </div>

              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Aboutus;
