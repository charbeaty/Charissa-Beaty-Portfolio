import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
  <Container>
      <Row>
          <Col xs="6" className="myImage">
          <img src="./images/black_and_white.jpg" alt="me" height="400" width="395"></img>
          </Col>
          <hr></hr>
          <Col xs="6">
          <h1 className="mystory">My Story</h1>
          <br></br>
          <hr></hr>
          <p>
              I am a certified full-stack web developer, and focus my skills
              on the front end. I earned my certification through the University of Utah 
              Professional Education Coding Bootcamp, and in so doing have had the opportunity to work on my own projects, as well as three group 
              projects with my peers.
              I love to learn and I am so elated that I get to embark on this new journey to improve
              my skills and learn new ones. 
          </p>
          {/* <img src="https://cdn.shopify.com/s/files/1/1570/3795/files/cropped-flower-header-21_grande.png?v=1533357463" alt="flowers" height="100" width="200"></img> */}
          </Col>
      </Row>
  </Container>
  </div>
    );
}

export default About;