import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Groove from "../../Assets/Projects/portfolio-1.jpg";
import portfolio from "../../Assets/Projects/portfolio.png";
import gupshup from "../../Assets/Projects/portfolio-3.jpg";
import quickbite from "../../Assets/Projects/portfolio-2.jpg";


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
              imgPath={Groove}
              isBlog={false}
              title="Gadget Groove"
              description="Gadget E-commerce website build with react.js, Material-UI, and Firebase. Have features which allows user for chat on whatsapp ,place an order and add item to cart"
              ghLink="https://github.com/Web-Development-Project-Series/GadgetGroove-Semester-Project-"
              demoLink="https://gadget-groove.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gupshup}
              isBlog={false}
              title="Gupshup Gazzete"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. still in progess"
              ghLink="https://github.com/maaz-bin-hassan/blog"
              demoLink="https://blog-peach-psi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="personal portfolio"
              description="Built personal portfolio, using HTML CSS and JS added dark mode functionality for ease of read"
              ghLink="https://github.com/maaz-bin-hassan/Portfolio"
              demoLink="https://maazbinhassan.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickbite}
              isBlog={false}
              title="Quickbite cafe"
              description="Online cafe website which supports html, css, and js code with admin panel"
              ghLink="https://github.com/maaz-bin-hassan/023-21-0231-maaz-bin-hassan-cafe"
              demoLink="https://023-21-0231-maaz-bin-hassan-cafe.vercel.app/"              
            />
          </Col>

          

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
