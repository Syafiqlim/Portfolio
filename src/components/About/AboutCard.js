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
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books and articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new stuff
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
