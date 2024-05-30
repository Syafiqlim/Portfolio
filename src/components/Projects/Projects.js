import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import github from "../../Assets/Projects/monika_sleepyface-removebg.png";
import fyp from "../../Assets/Projects/fyp0.png";
import ESP32_MySQL from "../../Assets/Projects/lib.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
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
