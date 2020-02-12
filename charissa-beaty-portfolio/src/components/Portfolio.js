import React from 'react';
import Navbar from './Navbar';
import Jumbotronhome from './JumbotronHome';
import Footer from './Footer';
import CardPersonal from './CardPersonal';
import CardGroups from './CardGroups'
import { Container, Row, Col, Breadcrumb, Nav } from 'reactstrap';
import BottomNav from './BottomNav';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
        <Container id="portfolio">
            <Row>
                <Col xs="12" className="project">
                    <h1 className="text-center">Personal Projects</h1>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <CardPersonal />
                </Col>

                <Col xs="12">

                    <h1 className="text-center">Group Projects</h1>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <CardGroups />
                </Col>
            </Row>
        </Container>
        <BottomNav />
        </div>
    )
}

export default Portfolio;