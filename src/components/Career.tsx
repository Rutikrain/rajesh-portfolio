import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>UPONLY Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led the end-to-end design process for multiple B2B and
              B2C digital products, ensuring seamless user experiences
              and visually appealing interfaces. Collaborated closely with
              cross-functional teams to deliver user-centric solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Good Old Delights</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing websites for real estate developers and AI-based platforms,
              focusing on user-centric layouts and modern UI.
              Examples: ikey.in, brahmaastra.ai
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: "50px" }}>
          Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor in Banking & Insurance</h4>
                <h5>University of Mumbai</h5>
              </div>
              <h3>2020-23</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary School Certificate</h4>
                <h5>Maharashtra State Board</h5>
              </div>
              <h3>2018-20</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
