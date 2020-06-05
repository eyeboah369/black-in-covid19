import React from 'react';
import '../App.css';
import App from '../App'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Learn extends React.Component {
    render() {
        return(
        <div className="LearnPage">
        <header className="App-header">
        <Col>BLACK IN COVID19</Col>
        <Col class="float-right">
          <span style={{float: 'right'}}>
            Evans Yeboah
          </span>
        </Col>
      </header>

        <Card style={{ width: '30rem', textAlign: "center" }}>
            <Card.Body>
                <Card.Title><strong>Power in the Facts</strong></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Health/Racism/Socioeconomics</Card.Subtitle>
                <Card.Text>
                    We as a people are facing not only health, economic but also racial innequality.
                    In the face of destruction it is up to us to educate ourselves and create new systems
                    that are built by us and for us.
                </Card.Text>
                        <Button variant="primary" >
                            <Link to="/" style={{color: 'white'}}>Home</Link>
                        </Button>{' '}
                        
            </Card.Body>
        </Card>
        </div>
        );
    }
}

export default Learn