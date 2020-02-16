import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import Navbar from '../components/Navbar';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <br></br>
        <Container id="portfolio">
            <Row>
                <Col xs="12" className="project">
                    <h1 className="text-center" id="personal">Personal Projects</h1>
                    <br></br>
                    <hr></hr>
                    <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/Bamazon.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Bamazon</CardTitle>
          <hr></hr>
          <CardSubtitle>Bamazon is an Amazon-like storefront using MySQL and Inquirer that takes in orders from customers and depletes stock from the store's inventory.</CardSubtitle>
          <CardText></CardText>
          <a className="teamatag" href='https://github.com/charbeaty/Bamazon.git'>
            <p className='d-inline teamlink mr-3'>GitHub</p><i className="fa fa-github fa-2x"></i>
            </a>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/burger.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Eat A Burger</CardTitle>
          <hr></hr>
          <CardSubtitle>Who doesn't love a burger? Using MySQL, Node, Express, and Handlebars, this web app lets you keep track of the burgers you have eaten, whether
        it's a Double Cheeseburger or a Peanut Butter Jalapeno Burger.

</CardSubtitle>
          <CardText></CardText>
          <a className="teamatag" href='https://github.com/charbeaty/Burger.git'>
            <p className='d-inline teamlink mr-3'>GitHub</p><i className="fa fa-github fa-2x"></i>
            </a>
            <br></br>
            <br></br>
            <a className="teamatag" href='https://git.heroku.com/burgerapp-cb.git'>
            <p className='d-inline teamlink mr-3'>Live Site</p>
            </a>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/clicky-game.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Memory Game</CardTitle>
          <hr></hr>
          <CardSubtitle>Clicky-Game is an interactive web application built with CSS, Bootstrap, and React.js that tests the users memory. To start the memory game, the user simply clicks on an image, after which the images are shuffled. Can you remember the images you've clicked?
</CardSubtitle>
          <CardText></CardText>
          <a className="teamatag" href='https://github.com/charbeaty/Clicky-Game.git'>
            <p className='d-inline teamlink mr-3'>GitHub</p><i className="fa fa-github fa-2x"></i>
            </a>
            <br></br>
            <br></br>
            <a className="teamatag" href='https://charbeaty.github.io/Clicky-Game/'>
            <p className='d-inline teamlink mr-3'>Live Site</p>
            </a>


        </CardBody>
      </Card>
    </CardDeck>
                    <br></br>
                    <br></br>
                </Col>
                <Col xs="12">
                    <h1 className="text-center" id="group">Group Projects</h1>
                    <br></br>
                    <hr></hr>
                    <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/urban-reader.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Urban Reader</CardTitle>
          <hr></hr>
          <CardSubtitle>    Urban Reader is a web app that uses text-to-speech to read Urban Dictionary definitions of popular words. The most recently searched terms across the web are displayed at the top, so you can hear what other people are looking up!

</CardSubtitle>
          <CardText></CardText>
          <a className="teamatag" href='https://github.com/charbeaty/T2S-Urban-Dict.git'>
            <p className='d-inline teamlink mr-3'>GitHub</p><i className="fa fa-github fa-2x"></i>
            </a>
            <br></br>
            <br></br>
            <a className="teamatag" href='https://thomasdylan.github.io/T2S-Urban-Dict/'>
            <p className='d-inline teamlink mr-3'>Live Site</p>
            </a>


        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/movieChats.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Movie Chats</CardTitle>
          <hr></hr>
          <CardSubtitle>Movie Chats is a place for people to come together and chat about movies that are currently in theaters.</CardSubtitle>
          <CardText></CardText>
          <a className="teamatag" href='https://github.com/charbeaty/movie-chats.git'>
            <p className='d-inline teamlink mr-3'>GitHub</p><i className="fa fa-github fa-2x"></i>
            </a>
            <br></br>
            <br></br>
            <a className="teamatag" href='https://radiant-hamlet-52915.herokuapp.com/'>
            <p className='d-inline teamlink mr-3'>Live Site</p>
            </a>


        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/front-page.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">QuickUps</CardTitle>
          <hr></hr>
          <CardSubtitle>Quick Ups is a peer-to-peer delivery system. 

Through Quick Ups people who do not own a truck or other large vehicle are able to request a pick up of large purchased items by someone who has registered their truck or other large vehicle to be used as a resource through the Quick Ups website.</CardSubtitle>
          <CardText></CardText>
          <a className="teamatag" href='https://github.com/charbeaty/quickupsv2.git'>
            <p className='d-inline teamlink mr-3'>GitHub</p><i className="fa fa-github fa-2x"></i>
            </a>
            <br></br>
            <br></br>
            <a className="teamatag" href='https://quickups2.herokuapp.com/'>
            <p className='d-inline teamlink mr-3'>Live Site</p>
            </a>


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