import React from "react";

import Logo from "../ images/icons8-logo-design-64.png";
import CustomLogo from "../ images/icons8-paint-48.png";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <section className="heading">
        <h1>Whats Makes Us Diffirent.</h1>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </p>
      </section>

      <section className="aboutBody">
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={Logo} />
          <Card.Body>
            <Card.Title>Logo</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={CustomLogo} />
          <Card.Body>
            <Card.Title>Design</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default AboutUs;
