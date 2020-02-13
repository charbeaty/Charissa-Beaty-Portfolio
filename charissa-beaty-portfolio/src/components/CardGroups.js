import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Example = (props) => {
  return (
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
  );
};

export default Example;