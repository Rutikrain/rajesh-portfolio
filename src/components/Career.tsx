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
                <h4>Full Stack Developer</h4>
                <h5>Good Old Delights Company</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a Full Stack Developer, contributing to various web development and software engineering tasks, including backend development using Next.js.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Qspider & Jspider</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Web Development: Created responsive interfaces using HTML, CSS, and JavaScript. Databases: Managed and queried databases with SQL. Team Projects & Skill Enhancement: Attended training to improve Java and web development skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA IT</h4>
                <h5>Finolex Academy of Management & Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Master of Computer Applications from Finolex Academy of Management & Technology in Ratnagiri.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSC IT: Information Technology</h4>
                <h5>Gogate Joglekar College</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Bachelor of Science in Information Technology from Gogate Joglekar College in Ratnagiri.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
