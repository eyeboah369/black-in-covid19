import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import StateIcon from './StateIcon'
import Slide from 'react-reveal/Slide';
import stateMap from '../stateMap.json'
import infectionRate from '../infectionRate.json'
import StatePopulationIcon from './StatePopulationIcon'

let currDeath = 0
let positivePercentageIncrease = 0
let deathPercentageIncrease = 0

function useRate(props){
    console.log("base: ", infectionRate[props.toUpperCase()][0])
    const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://covidtracking.com/api/states?state=${props.toLowerCase()}`)
    .then(response => response.json())
    .then(data => setData(data));
  },[]);
  let currPositive = infectionRate[props.toUpperCase()][0]
  let positive = data.positive
  let death = data.death
  if(positive > currPositive){
    let increaseRate = positive - currPositive
    positivePercentageIncrease = (increaseRate / positive) * 100
    infectionRate[props.toUpperCase()][0] = positive
    console.log("Increase: ", infectionRate[props.toUpperCase()][0])
    return increase(positivePercentageIncrease)
  }
  else{
    infectionRate[props.toUpperCase()][0] = positive
    console.log("Decrease: ", infectionRate[props.toUpperCase()][0])
    return decrease(positivePercentageIncrease)
  }
  //TODO: add same functionality to the death rate for the function call
  //important to remeber that death count doesnt go down but only up
  //    so question needs to be asked of what we want to represent: either the rate at which death is increasing
  //    or total increase in death
}

function decrease(decrease){
    return(
        <Col>
        <h2>Infection Rate</h2><br />
        <h3 style={{color: "#1D88F4"}}>{decrease + "%"}</h3>
        <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="#1D88F4" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
        <path fill-rule="evenodd" d="M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
        </svg>
        </Col>
    )
}

function increase(increase){
    return(
        <Col>
        <h2>Infection Rate</h2><br />
        <h3 style={{color: "#1D88F4"}}>{increase + "%"}</h3>
        <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="#1D88F4" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"/>
        </svg>
        </Col>
    )
}

function StateData(props){
    return(
        <Slide left>
            <Col style={{textAlign: "center", boxShadow: "-6px 9.5px 20px -7px #888888", height: "100vh", borderRadius: "6px", 
                        marginRight: "38.3vw", marginBottom: "3vh", paddingLeft: "0vw",paddingTop: "3vh"}}>

                <Row style={{marginBottom: "4vh"}}>
                    <Col>
                        <h1>{stateMap[props.name.toUpperCase()]}</h1>
                    </Col>
                </Row>

                <Row style={{justifyContent: "center", alignContent: "center", fontSize: "20px"}}>
                    <Col><StatePopulationIcon state={props.name} /></Col>
                </Row>

                <Row>
                    {/*<Col><h2>Death Rate</h2></Col>*/}
                    {/*{useRate(props.name)*/}
                </Row>

            </Col>
        </Slide>
    )
}

export default StateData