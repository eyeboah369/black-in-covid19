import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class InfoBox extends React.Component {
    render() {
        return(
            <Card style={{ width: '30rem', textAlign: "center", marginBottom: "3vh", boxShadow: "-6px 9.5px 20px -7px #888888"}}>
            <Card.Body>
                <Card.Title><strong>Power in the Facts</strong></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Health/Racism/Socioeconomics</Card.Subtitle>
                <Card.Text>
                    We as a people are facing not only health, economic but also racial innequality.
                    In the face of destruction it is up to us to educate ourselves and create new systems
                    that are built by us and for us.
                </Card.Text>
                <Link to="/COVID19">
                        <Button variant="primary">COVID19</Button>{' '}
                    </Link>
                    <Link to="/learn">
                        <Button variant="primary">Learn</Button>{' '}
                    </Link>
            </Card.Body>
            </Card>
        )
    }
}
export default InfoBox