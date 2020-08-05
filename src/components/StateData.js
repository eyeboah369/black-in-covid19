import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import StateIcon from './StateIcon'
import Slide from 'react-reveal/Slide';
import LineChart from './LineChart'
import stateMap from '../stateMap.json'

let updateTime = 24 * 60 * 60 * 1000
let currPositive = 0
let currDeath = 0
let positivePercentageIncrease = 0
let deathPercentageIncrease = 0
function StateData(props){
    const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://covidtracking.com/api/states?state=${props.name.toLowerCase()}`)
    .then(response => response.json())
    .then(data => setData(data));
  },[]);
  let positive = data.positive
  if(currPositive > positive){
      let increaseRate = positive - currPositive
      positivePercentageIncrease = (increaseRate / positive) * 100
      currPositive = positive
  }
  let death = data.death
        return(
            //TODO: Find a way to lay out metrics about the death and positivity rate maybe with percents
            // maybe use the same percent methods stock sites use with red meaning increase and green meaning
            //decreate in death and positivity rates
            // USING A GRAPH IS OVER COMPLICATED (just need to find a succinct layout for the representation of data)
            <Slide left>
            <Col style={{textAlign: "center", boxShadow: "-6px 9.5px 20px -7px #888888", height: "100vh", borderRadius: "6px", 
                         marginRight: "28.3vw", marginBottom: "3vh", paddingLeft: "0vw",paddingTop: "3vh"}}>
                <Row style={{marginBottom: "4vh"}}><Col><h1>{stateMap[props.name.toUpperCase()]}</h1></Col></Row>
                <Row>
                    <Col md={4}><StateIcon name={props.name} height="7.7em" width="7.7em" /></Col>
                </Row>
                <Row>
                    <Col><h2>Death Rate</h2></Col>
                    <Col>
                    <h2>Infection Rate</h2><br />
                    <h3 style={{color: "#1D88F4"}}>{positivePercentageIncrease + "%"}</h3>
                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="#1D88F4" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                    </Col>
                    
                </Row>

            </Col>
            </Slide>
            
            
        )
}

export default StateData