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
      <Jumbotron style={{backgroundImage: `url(${blmProtestNYC})`, height: "100vh",textAlign: "center"}}>
        <h1>Learn the Facts</h1>
        <h4>
          The key to understanding the present and<br /> the future is knowing about the past. <br /> 
          There is power in knowledge, the question<br />  is what you will do with it?
        </h4>
        <p>
          <Button variant="primary"><a style={{color: "white"}} href="#info">Learn more</a></Button>
        </p>
      </Jumbotron>
      <Fade left>
        <Row id="info" style={{alignItems: "center", justifyContent: "center", marginTop: "5vh"}} >
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
                            <a target="_blank" style={{color: "white"}} href="https://www.sciencenews.org/article/coronavirus-why-african-americans-vulnerable-covid-19-health-race">
                              Read
                            </a>
                        </Button>{' '}
                        
            </Card.Body>
        </Card>
        
        <Card style={{ width: '25rem',marginRight: "3vw", textAlign: "center" }}>
            <Card.Body>
                <Card.Title><strong>Historical Geographical Disparities</strong></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Health/Racism/Socioeconomics</Card.Subtitle>
                <Card.Text>
                    20th century practices of segregation in education, housing, the labor markets in different areas
                    have added to poorer health of the African American community. 
                </Card.Text>
                        <Button variant="warning" >
                            <a target="_blank" style={{color: "white"}} href="https://www.forbes.com/sites/rakeenmabud/2019/12/04/history-and-housing-discrimination-why-neighborhoods-in-the-united-states-are-still-so-segregated/#3f520fd6501d">
                              Read
                            </a>
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
                        <Button variant="success">
                            <a target="_blank" style={{color: "white"}} href="https://www.pewtrusts.org/en/research-and-analysis/blogs/stateline/2020/06/15/racism-is-a-public-health-crisis-say-cities-and-counties">
                              Read
                            </a>
                        </Button>{' '}
                        
            </Card.Body>
        </Card>
        </Row>
        <Row style={{marginTop: "8vh",alignItems: "center", justifyContent: "center", textAlign: "center"}}>
          
       <h1 style={{margin: "0 5vw 0 5vw"}}>How it Connects</h1><br />

       </Row>
       <Row style={{marginTop: "2vh", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
         <span style={{width: "60%"}}><p>
            Throughout American history racism and the echoing effects of slavery cannot be separated from
            the society built upon it. In all aspects of everyday American life we see blatant instances of
            how the Black Community is adversely affected by systemic racism. Whether it be in technology,
            healthcare, education, housing, or economics; racism and its influence remains a powerful force 
            in America. It is all connected.
          </p></span> 



        </Row>



        <Row style={{ alignItems: "center", justifyContent: "center", marginTop: "5vh",marginBottom: "5vh", textAlign: "center"}}>
          <Col><PercentIcon percent="24.5" pathColor="purple"/><h4 class="firstPercent">Native Americans</h4></Col>
          <Col><PercentIcon percent="21" pathColor="green"/><h4>Black</h4></Col>
          <Col><PercentIcon percent="18" pathColor="red"/><h4>Hispanic</h4></Col>
          <Col><PercentIcon percent="10" pathColor="orange"/><h4>White</h4></Col>
          <Col><PercentIcon percent="10" pathColor="blue"/><h4>Asian</h4></Col>
        </Row>
        <strong><p>Povert rate among races in the United States as reported by <a target="_blank" href="https://www.povertyusa.org/facts">povertyusa.org</a></p></strong>
        
        <span style={{width: "60%", textAlign: "center", marginTop: "25px"}}><p>
            Poverty is just one example of consequences of racism that play into the rate at which<br />
            different groups of people are affected and die from COVID19, and the numbers are disturbing.
          </p></span> 
        </Fade>

        
        </div>
        );
    }
}

export default Learn