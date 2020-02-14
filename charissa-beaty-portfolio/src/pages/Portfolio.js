import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

const Portfolio = () => {
    return (
        <div>
        <Container id="portfolio">
            <Row>
                <Col xs="12" className="project">
                    <h1 className="text-center">Personal Projects</h1>
                    <br></br>
                    <hr></hr>
                    <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/Bamazon.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Bamazon</CardTitle>
          <CardSubtitle>Amazon-like store front</CardSubtitle>
          <CardText></CardText>
          <Button>GitHub Link</Button>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/burger.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Eat A Burger</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <Button>GitHub</Button>
          <Button>Live Site</Button>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/clicky-game.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Memory Game</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <Button>GitHub</Button>
          <Button>Live Site</Button>

        </CardBody>
      </Card>
    </CardDeck>
                    <br></br>
                    <br></br>
                </Col>
                <Col xs="12">
                    <h1 className="text-center">Group Projects</h1>
                    <br></br>
                    <hr></hr>
                    <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/urban-reader.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Urban Reader</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <Button>GitHub</Button>
          <Button>Live Site</Button>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/movieChats.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Movie Chats</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <Button>GitHub</Button>
          <Button>Live Site</Button>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/" alt="Card image cap" />
        <CardBody>
          <CardTitle>Quick Ups</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <Button>Git Hub</Button>
          <Button>Live Site</Button>

        </CardBody>
      </Card>
    </CardDeck>
                    <br></br>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Portfolio;