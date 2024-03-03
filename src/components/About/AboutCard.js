import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Syafiqlim </span>
            from <span className="purple"> Melaka, Malaysia.</span>
            <br />
            I am currently a student at Politenik Merlimau, enrolling in Diploma Electronic (Computer) Engineering programme.
            <br />
            <br />
            Achievements and Certfications (Certs and badges verifications are available on LinkedIn)
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Arcitura Certified IoT Architect (2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> Postman API Fundamentals Student Expert certification (2024)
            </li>
            <li className="about-activity">
              <ImPointRight /> WorldSkills Malaysia Belia Electronics Participant Certificate (2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> Coursera Google Cybersecurity Professional Certificate (Ongoing)
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Cloud Skill Badges (2022-2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> Codered Certificates of Achievements (Cyber Security Courses) (2022)
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Developer Skill Badges (2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> Chairman of JKE PMM Club (2024)
            </li>
            <li className="about-activity">
              <ImPointRight /> Malaysia Future Leaders School (MFLS) Tier 2 Certificate (2019)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
