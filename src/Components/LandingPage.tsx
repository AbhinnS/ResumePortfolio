import "./LandingPage.css";

function LandingPage() {
  return (
    <main className="landing-page" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abhinn Sayansh home">
          <span className="brand-mark">AS</span>
          <span className="brand-copy">
            <strong>Abhinn Sayansh</strong>
            <small>FULL-STACK DEVELOPER</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="resume-link" href="/resume.pdf" download>
          DOWNLOAD RÉSUMÉ
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-left">
          <div className="eyebrow">
            <span>01</span> HELLO, I'M ABHINN
          </div>
          <h1 id="hero-title">
            I build digital
            <br />
            products that <span>work.</span>
          </h1>
          <div className="hero-support">
            <p>
              Full-stack developer specializing in React, .NET,
              <br className="desktop-break" /> Node.js, and database-driven
              business
              <br className="desktop-break" /> applications.
            </p>
            <a className="explore-link" href="#work">
              <span>EXPLORE MY WORK</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-right" aria-label="Developer profile">
          <div className="terminal-card">
            <div className="terminal-bar">
              <span className="terminal-dots">
                <i />
                <i />
                <i />
              </span>
              <span>abhinn@portfolio: ~</span>
              <span>⌘</span>
            </div>
            <div className="terminal-body">
              <p className="command">
                <b>›</b> whoami
              </p>
              <p className="terminal-value">Full-stack software developer</p>
              <p className="command">
                <b>›</b> cat focus.txt
              </p>
              <p className="terminal-value">React · .NET · Node.js · Oracle</p>
              <p className="command">
                <b>›</b> current-role
              </p>
              <p className="terminal-value">
                <i className="status-dot" /> SDE-1 at TCI
              </p>
              <p className="prompt">
                <b>›</b> <i />
              </p>
            </div>
            <div className="terminal-footer">
              <span>Based in India</span>
              <span>Full stack</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span className="scroll-note">SCROLL TO EXPLORE</span>
          <div className="stats">
            <div>
              <strong>100+</strong>
              <span>PAGES DELIVERED</span>
            </div>
            <div>
              <strong>250+</strong>
              <span>RECORDS PER UPLOAD</span>
            </div>
            <div>
              <strong>3</strong>
              <span>LIVE DASHBOARDS</span>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <span className="section-kicker">
            <i>02</i> SELECTED WORK
          </span>
          <h2 id="work-title">
            Systems built for
            <br />
            real operations.
          </h2>
          <p>
            Professional and independent products spanning enterprise workflows,
            visualization, and e-commerce.
          </p>
        </div>
        <article className="project-row">
          <div
            className="project-art workflow-art"
            aria-label="Inventory and order management dashboard preview"
          >
            <div className="dashboard-window">
              <div className="dashboard-top">
                <span>● ● ●</span>
                <small>workflowx.app/dashboard</small>
              </div>
              <div className="dashboard-content">
                <aside>
                  W.
                  <br />
                  <br />□<br />
                  <br />□<br />
                  <br />□
                </aside>
                <div className="dashboard-main">
                  <small>INVENTORY OVERVIEW</small>
                  <h3>Good morning, Abhinn.</h3>
                  <div className="dash-cards">
                    <div>
                      Total products<strong>2,480</strong>
                      <i>+124</i>
                    </div>
                    <div>
                      Open orders<strong>842</strong>
                      <i>+21</i>
                    </div>
                    <div>
                      Low stock<strong>24</strong>
                      <i>Review</i>
                    </div>
                  </div>
                  <div className="chart-card">
                    <small>
                      Order volume <span>LAST 12 MONTHS</span>
                    </small>
                    <div className="bars">
                      {[32, 48, 36, 59, 52, 70, 62, 76, 64, 82, 71, 88].map(
                        (height, index) => (
                          <i key={index} style={{ height: `${height}%` }} />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="art-arrow">↗</span>
          </div>
          <div className="project-copy">
            <div className="project-title">
              <small>01</small>
              <div>
                <h3>WorkFlowX</h3>
                <p>Inventory &amp; order management</p>
              </div>
              <small>2025</small>
            </div>
            <div className="project-description">
              <p>
                A production-ready platform with product, inventory, order, and
                analytics modules, backed by layered architecture and role-based
                access.
              </p>
              <div className="tags">
                <span>REACT</span>
                <span>TYPESCRIPT</span>
                <span>.NET 8</span>
                <span>ORACLE</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </article>
        <article className="project-row">
          <div className="project-art yard-art">
            <span className="yard-orb">Y</span>
            <span className="yard-sun" />
            <div className="yard-panel">
              <div>
                <b>Yard Control</b>
                <small>Live status</small>
              </div>
              <h4>Container placement and yard activity</h4>
              <div className="yard-feature">
                <i />
                Real-time operational visibility
                <small>
                  Monitor placement, movement, load status, and maintenance
                  information from anywhere.
                </small>
              </div>
              <p>
                01　 Loaded containers <span>LIVE</span>
              </p>
              <p>
                02　 Empty &amp; maintenance <span>LIVE</span>
              </p>
            </div>
            <span className="yard-orb-small" />
            <span className="art-arrow">↗</span>
          </div>
          <div className="project-copy">
            <div className="project-title">
              <small>02</small>
              <div>
                <h3>Yard Management</h3>
                <p>Remote operations platform</p>
              </div>
              <small>2025</small>
            </div>
            <div className="project-description">
              <p>
                A cloud-accessible monitoring system with real-time container
                tracking, status visibility, and a 3D yard visualization module.
              </p>
              <div className="tags">
                <span>REACT</span>
                <span>.NET MVC</span>
                <span>ORACLE SQL</span>
                <span>REST APIS</span>
              </div>
            </div>
          </div>
        </article>
        <article className="project-row">
          <div className="project-art food-art">
            <span className="food-word">
              hungry
              <br />
              heart
            </span>
            <div className="phone-preview">
              <small>DELIVERY TO YOUR DOOR</small>
              <h4>
                What are you
                <br />
                craving today?
              </h4>
              <div className="delivery-ring">
                30m<small>AVG. DELIVERY</small>
              </div>
              <p>
                Popular near you <b>→</b>
              </p>
              <p>
                Your cart <b>3</b>
              </p>
            </div>
            <span className="art-arrow">↗</span>
          </div>
          <div className="project-copy">
            <div className="project-title">
              <small>03</small>
              <div>
                <h3>HungryHeart</h3>
                <p>Full-stack e-commerce</p>
              </div>
              <small>2024</small>
            </div>
            <div className="project-description">
              <p>
                A full-stack food ordering experience designed to make browsing,
                ordering, and delivery simple.
              </p>
              <div className="tags">
                <span>REACT</span>
                <span>NODE.JS</span>
                <span>MONGODB</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section
        className="experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="experience-heading">
          <span className="section-kicker">
            <i>03</i> EXPERIENCE
          </span>
          <h2 id="experience-title">
            Building across the
            <br />
            <span>full product stack.</span>
          </h2>
        </div>
        <div className="experience-content">
          <div className="experience-intro">
            <p className="lead">
              I’m a full-stack developer focused on reliable applications, clean
              architecture, and practical business impact.
            </p>
            <p>
              My work spans responsive React interfaces, RESTful .NET and
              Node.js APIs, Oracle and MongoDB data layers, cloud deployment,
              automation, testing, and production support.
            </p>
            <a
              className="explore-link resume-download"
              href="/resume.pdf"
              download
            >
              <span>DOWNLOAD FULL RÉSUMÉ</span>
              <span>↗</span>
            </a>
          </div>
          <div className="timeline">
            <small>CAREER TIMELINE</small>
            <div>
              <time>Sep 2025–Present</time>
              <p>
                Transport Corporation of India
                <span>SDE-1 · React, .NET, Oracle</span>
              </p>
            </div>
            <div>
              <time>Apr–Aug 2025</time>
              <p>
                NBCS Technologies<span>Full Stack Developer</span>
              </p>
            </div>
            <div>
              <time>Jun 2024–Mar 2025</time>
              <p>
                Future Algorithm<span>React JS Intern</span>
              </p>
            </div>
          </div>
        </div>
        <div className="education">
          <span>EDUCATION</span>
          <p>
            <small>2022–2024</small>Master of Computer Applications
            <em>S.R.M University, Modinagar</em>
          </p>
          <p>
            <small>2019–2022</small>Bachelor of Computer Applications
            <em>G.D. Goenka University, Sohna</em>
          </p>
        </div>
      </section>
      <div className="skills-marquee" aria-label="Skills">
        <div>
          {[
            ".NET Web API",
            "Node.js",
            "Oracle SQL",
            "MongoDB",
            "REST APIs",
            "AWS",
            "Docker",
            "React",
            "TypeScript",
          ].map((skill, index) => (
            <span key={index}>
              {skill}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
      <footer className="contact-section" id="contact">
        <span className="section-kicker">
          <i>04</i> START A CONVERSATION
        </span>
        <div className="contact-main">
          <h2>
            Let’s build
            <br />
            something useful.
          </h2>
          <a href="mailto:sayanshabhinn@gmail.com" className="contact-button">
            GET IN TOUCH <span>↗</span>
          </a>
        </div>
        <div className="contact-details">
          <a href="mailto:sayanshabhinn@gmail.com">SAYANSHABHINN@GMAIL.COM</a>
          <a href="tel:+919911152323">+91 99111 52323</a>
        </div>
        <div className="contact-bottom">
          <span>© 2025 ABHINN SAYANSH</span>
          <span>
            <a href="https://github.com/">GITHUB ↗</a>
            <a href="https://linkedin.com/">LINKEDIN ↗</a>
          </span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
