import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BottomNav from './BottomNav';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
        <Navbar/>
  <Container>
      <Row>
          <Col xs="6">
          <img src="./images/black_and_white.jpg" alt="me" height="400" width="395"></img>
          </Col>
          <hr></hr>
          <Col xs="6">
          <h1>My Story</h1>
          <p>
              I am a certified full-stack web developer, and focus my awesome skills
              on the front end. I earned my certification through the University of Utah 
              Professional Education Coding Bootcamp, and in so doing have had the opportunity to work on my own projects, as well as three group 
              projects with my peers.
              I love to learn and I am so elated that I get to embark on this new journey to improve
              my skills and learn new ones. 
          </p>
          </Col>
      </Row>
  </Container>
  <BottomNav />
  </div>
    );
}

export default About;