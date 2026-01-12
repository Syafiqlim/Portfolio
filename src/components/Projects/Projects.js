import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import github from "../../Assets/Projects/monika_sleepyface-removebg.png";
import fyp from "../../Assets/Projects/fyp0.png";
import ESP32_MySQL from "../../Assets/Projects/lib0.png";
import pcb_a1 from "../../Assets/Projects/pcb_a1.png";
import pcb_a2 from "../../Assets/Projects/pcb_a2.png";
import pcb_a3 from "../../Assets/Projects/pcb_a3.png";
import pcb_a4 from "../../Assets/Projects/pcb_a4.jpg";
import pcb_a6 from "../../Assets/Projects/pcb_a6.png";
import pcb_b1 from "../../Assets/Projects/pcb_b1.png";
import pcb_b2 from "../../Assets/Projects/pcb_b2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Hobby </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        {/* Big centered image */}
          <div className="big-image-wrapper">
            <img src={pcb_a1} alt="Main Project" className="big-project-image" />
            <img src={pcb_a2} alt="Main Project" className="big-project-image0" />
            <img src={pcb_a3} alt="Main Project" className="big-project-image0" />
            <img src={pcb_a4} alt="Main Project" className="big-project-image0" />
            <img src={pcb_a6} alt="Main Project" className="big-project-image0" />
            <img src={pcb_b1} alt="Main Project" className="big-project-image0" />
            <img src={pcb_b2} alt="Main Project" className="big-project-image0" />
            <h4 className="big-image-text" style={{ color: "white" }}>
              This is 4-layer PCB design I work on for my hobby project. (explanation upon asking)
            </h4>
          </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="GitHub Profile"
              description="Check out my GitHub profile!"
              ghLink="https://github.com/Syafiqlim"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fyp}
              title="Final Year Project (Done)"
              description="Cloud-based Hydroponic Plant Monitoring System (fyp.syafiqlim.site) (Will be open-source soon)"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ESP32_MySQL}
              title="ESP32_MySQL library"
              description="Published ESP32_MySQL library to Arduino Library Manager, for directly connect and execute SQL to MySQL database"
              ghLink="https://github.com/Syafiqlim/ESP32_MySQL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
