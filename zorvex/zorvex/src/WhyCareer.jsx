import leaf from "./assets/green-single-leaf.png";

const reasons = [
  {
    number: "001",
    title: "We Listen First",
    description:
      "We take time to understand your struggles before offering solutions, because every healthcare organization has its own story.",
  },
  {
    number: "002",
    title: "We Care Like Partners",
    description:
      "Your goals become our goals. We celebrate your successes, solve problems together, and stay by your side every step of the way.",
  },
  {
    number: "003",
    title: "Clear Communication",
    description:
      "No confusing jargon, no unanswered questions. Just transparent conversations and a team that's always ready to help.",
  },
  {
    number: "004",
    title: "People Before Processes",
    description:
      "Behind every claim is a patient, and behind every patient is a provider doing their best. We never lose sight of that.",
  },
  {
    number: "005",
    title: "Reliable Support",
    description:
      "Whether it's a quick question or a complex issue, you'll always have someone to turn to when you need guidance.",
  },
  {
    number: "006",
    title: "Growing Together",
    description:
      "Because the best results happen when people trust each other and work toward the same goal.",
  },
];

function WhyCareer() {
  return (
    <>
      <style>
        {`
          .why-career {
            padding: 110px 8%;
            background: #f7f7f7;
          }

          .why-header {
            margin-bottom: 70px;
          }

          .why-tag {
            color: #3fa55b;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .why-title {
            display: flex;
            align-items: center;
            gap: 14px;

            font-family: "Jomhuria", serif;
            font-size: 92px;
            line-height: .8;
            color: #000;

            margin: 0;
          }

          .why-leaf {
            width: 55px;
            height: auto;
          }

          .why-subtitle {
            margin-top: 16px;
            max-width: 720px;

            font-size: 18px;
            line-height: 1.7;
            color: #707070;
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 55px 80px;
          }

          .why-card {
            transition: .3s ease;
          }

          .why-card:hover {
            transform: translateY(-5px);
          }

          .why-number {
            color: #3fa55b;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
          }

          .why-card-title {
            font-size: 28px;
            font-weight: 700;
            color: #111;
            margin-bottom: 10px;
          }

          .why-card-description {
            font-size: 18px;
            line-height: 1.6;
            color: #666;
          }

          @media (max-width: 992px) {

            .why-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .why-title {
              font-size: 70px;
            }
          }
            .why-image-wrapper{
  margin-bottom:90px;
}

.why-image{
  
  width:100%;
  height:520px;

  object-fit:cover;

  border-radius:28px;
  margin-top:100px;
  margin-bottom:30px;
}

.why-image-description{
  max-width:2000px;

  font-size:22px;
  line-height:1.8;

  color:#444;
}

@media(max-width:768px){

  .why-image{
    height:280px;
  }

  .why-image-description{
    font-size:17px;
  }
}

          @media (max-width: 768px) {

            .why-grid {
              grid-template-columns: 1fr;
            }

            .why-title {
              font-size: 58px;
            }

            .why-card-title {
              font-size: 24px;
            }

            .why-card-description {
           
              font-size: 16px;
              max-width:2000px;
            }
          }
        `}
      </style>

      <section className="why-career">
        <div className="why-header">
          <div className="why-tag">YOUR PATH TO REAL CHANGE</div>

          <h2 className="why-title">
            Why Choose Zorvex?
            <img src={leaf} alt="leaf" className="why-leaf" />
          </h2>

          <p className="why-subtitle">
            Because great healthcare deserves a partner who listens,
            understands, and genuinely cares about your success.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-number">{item.number}</div>

              <div className="why-card-title">{item.title}</div>

              <div className="why-card-description">{item.description}</div>
            </div>
          ))}
        </div>
        <div className="why-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600"
            alt="Zorvex Team"
            className="why-image"
          />

          <p className="why-image-description">
            We believe that the best teams are built by people who are curious,
            passionate, and eager to make a difference. Whether you're a student
            eager to learn, a recent graduate ready to grow, or a professional
            looking for your next challenge, Zorvex offers a place where your
            ideas are valued, your growth is supported, and your work has
            purpose. Join us and help shape the future of healthcare support,
            one step at a time.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhyCareer;
