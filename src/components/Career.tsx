import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Electronic and Computer Science Engineering</h4>
                <h5>Shree L.R.Tiwari College Of Engineering, Mumbai University</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              CGPA: 6. Studying at Mira Road, Thane.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Oracle & Simplilearn</h5>
              </div>
              <h3></h3>
            </div>
            <p>
              - Introduction to Front End Development - Simplilearn <br />
              - Data Science Professional - Oracle <br />
              - AI Vector Search Professional - Oracle <br />
              - Generative AI Professional - Oracle <br />
              - DevOps Professional - Oracle <br />
              - AI Foundations Associate - Oracle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
