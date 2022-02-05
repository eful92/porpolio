import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/1.png";
import emotion from "../../Assets/Projects/2.jpg";
import editor from "../../Assets/Projects/3.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Tugas Akhir Stmik Horizon Karawang"
              description="Skripsi 2022."
              link="https://drive.google.com/folderview?id=1CvJhcBvwCt0-VbrLwzYW_KHPbXv46Nn-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Porfolio"
              description="Porfolio."
              link="https://syflysuf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Magang"
              description="Magang (Sistem Administrasi PBB Desa Tanah Baru)"
              link="https://drive.google.com/folderview?id=1QscmTGg7XaTGeoKWb5LvIB_a2qzT82QV"
            />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
