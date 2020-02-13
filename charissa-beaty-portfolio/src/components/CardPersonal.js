import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Example = (props) => {
  return (
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
  );
};

export default Example;