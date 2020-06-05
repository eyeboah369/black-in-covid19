import React from 'react';
import '../App.css';
import Slides from './Slides'
import InfoBox from './InfoBox'
import StateIcon from './StateIcon'
import { Container, Row, Col, Button } from 'react-bootstrap'


class Home extends React.Component {
    render(){
  return (
    <div className="App">
      <header className="App-header">
        <Col>BLACK IN COVID19</Col>
        <Col class="float-right">
          <span style={{float: 'right'}}>
            Evans Yeboah
          </span>
        </Col>
      </header>

      <Slides />
      <Container style={{display: 'inline-flex', marginLeft: "3em", paddingLeft: "10em"}}>
        <Col style={{backgroundColor: ""}}>
          <StateIcon name="NY"/>
          <StateIcon name="CA"/>
          <StateIcon name="FL"/>
            <Col style={{marginLeft: "3vw"}}>
            <StateIcon name="MI"/>
            <StateIcon name="WA"/>
          </Col>
        </Col>
        
        <InfoBox />
      </Container>
      <Col style={{position: 'fixed'}}>
        {/*<Col><Button variant="info">Back to <br />the top</Button>{' '}</Col>*/}
        {/*<svg class="bi bi-chevron-double-down" width="5em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{margin: "auto"}}>
        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>*/}
      </Col>
    </div>
  );
}
}

export default Home