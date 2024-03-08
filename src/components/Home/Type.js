import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Embedded Systems Enthusiast",
          "Arcitura Certified IoT Architect",
          "Web Developer (Mostly Backend with Node.js)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
