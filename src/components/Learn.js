import React from 'react';
import '../App.css';
import './Learn.css'
import blmProtestNYC from '../imgs/blmProtestNYC.jpg'
import Fade from 'react-reveal/Fade';
import PercentIcon from './PercentIcon'
import { Container, Row, Col, Button, Card, Jumbotron } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Learn extends React.Component {
    render() {
        return(
        <div className="LearnPage">
        <header className="App-header">
        <Col><Link to="/" style={{textDecoration: "none", color: "white"}}>BLACK IN COVID19</Link></Col>
        <Col class="float-right">
          <span style={{float: 'right'}}>
            Evans Yeboah
          </span>
        </Col>
      </header>
      <Jumbotron style={{backgroundImage: `url(${blmProtestNYC})`, height: "100vh"}}>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Fade left>
        <Row style={{alignItems: "center", justifyContent: "center", marginTop: "5vh"}} >
        <Card style={{ width: '25rem', marginRight: "3vw", textAlign: "center" }}>
            <Card.Body>
                <Card.Title><strong>Underlying Health</strong></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Health/Racism/Socioeconomics</Card.Subtitle>
                <Card.Text>
                    Individuals with underlying health conditions are more at risk to die from the effects
                    of COVID19. Over 40% of African-Americans have high blood pressure and are at high risk for
                    diabetes. 
                </Card.Text>
                        <Button variant="primary" >
                            <Link to="/" style={{color: 'white'}}>Home</Link>
                        </Button>{' '}
                        
            </Card.Body>
        </Card>
        
        <Card style={{ width: '25rem',marginRight: "3vw", textAlign: "center" }}>
            <Card.Body>
                <Card.Title><strong>Historical Geographical Disparities</strong></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Health/Racism/Socioeconomics</Card.Subtitle>
                <Card.Text>
                    20th century practices of segregation in education, housing, the labor markets and access to health
                    care have added to health of the African American community. 
                </Card.Text>
                        <Button variant="warning" >
                            <Link to="/" style={{color: 'white'}}>Home</Link>
                        </Button>{' '}
                        
            </Card.Body>
        </Card>
        
        
        <Card style={{ width: '25rem',marginRight: "3vw", textAlign: "center", float: "right" }}>
            <Card.Body>
                <Card.Title><strong>Discrimination in Healthcare</strong></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Health/Racism/Socioeconomics</Card.Subtitle>
                <Card.Text>
                    African-American communnities are more likely to pay more our of pocket for health because
                    of underlying health conditions. Bias by healthcare professionals is also prevalent.
                </Card.Text>
                        <Button variant="success" >
                            <Link to="/" style={{color: 'white'}}>Home</Link>
                        </Button>{' '}
                        
            </Card.Body>
        </Card>
        </Row>
        <Row style={{marginTop: "5vh"}}>
          
        <strong><h1 style={{margin: "0 5vw 0 5vw"}}>How it Connects</h1></strong>
        </Row>
        <p>Povert rate among races in the United States as reported by <a href="https://www.povertyusa.org/facts">povertyusa.org</a></p>
        
        <Row style={{ alignItems: "center", justifyContent: "center", marginTop: "5vh", textAlign: "center"}}>
          <Col><PercentIcon percent="24.5" pathColor="purple"/><h4>Native Americans</h4></Col>
          <Col><PercentIcon percent="21" pathColor="green"/><h4>Black</h4></Col>
          <Col><PercentIcon percent="18" pathColor="red"/><h4>Hispanic</h4></Col>
          <Col><PercentIcon percent="10" pathColor="orange"/><h4>White</h4></Col>
          <Col><PercentIcon percent="10" pathColor="blue"/><h4>Asian</h4></Col>
        </Row>
        
        </Fade>

        
        </div>
        );
    }
}

export default Learn