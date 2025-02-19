import React, {useState, useEffect} from 'react'
import "./StatePopulationIcon.css"
import stateMap from '../stateMap.json'
import { PieChart } from 'react-minimal-pie-chart';
import { Button, Row, Col} from 'react-bootstrap';
import "react-circular-progressbar/dist/styles.css";

function StatePopulationIcon(props){
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://data.cdc.gov/resource/ks3g-spdg.json?state=${stateMap[props.state.toUpperCase()]}`)
    .then(response => response.json())
    .then(data => setData(data));
  },[]);

  //console.log(data)
  if(data.length == 0){
    return <h1>Loading...</h1>
  }

  //total death count by state as reported from API data
  let totalDeaths = 0
  let totalDeathsByRace = {}
  for(let i = 0; i < data.length; i++){
    if(data[i].covid_19_deaths && data[i].race_and_hispanic_origin != "Unkown"){
      if(data[i].race_and_hispanic_origin != "Unknown"){
        totalDeaths = totalDeaths + parseInt(data[i].covid_19_deaths)
        if(data[i].race_and_hispanic_origin in totalDeathsByRace) {

          totalDeathsByRace[data[i].race_and_hispanic_origin] += parseInt(data[i].covid_19_deaths)
        }
        else{
      
          totalDeathsByRace[data[i].race_and_hispanic_origin] = parseInt(data[i].covid_19_deaths)

        }
      }
    }
  }
  //console.log(totalDeathsByRace)
  //console.log(totalDeaths)

  let NHPI = totalDeathsByRace[ 'Non-Hispanic Native Hawaiian or Other Pacific Islander' ]
  let white = totalDeathsByRace[ 'Non-Hispanic White' ]
  let black = totalDeathsByRace[ 'Non-Hispanic Black' ]
  let asian = totalDeathsByRace[ 'Non-Hispanic Asian or Pacific Islander' ]
  let hispanic = totalDeathsByRace[ 'Hispanic' ]
  let native = totalDeathsByRace[ 'Non-Hispanic American Indian or Alaska Native' ]

  let parseRace = {}
  
  parseRace.black = Math.round((black / totalDeaths) * 100)
  parseRace.asian = Math.round((asian / totalDeaths) * 100)
  parseRace.hispanic = Math.round((hispanic / totalDeaths) * 100)
  parseRace.native = Math.round((native / totalDeaths) * 100)
  parseRace.white = Math.round((white / totalDeaths) * 100)
  parseRace.NHPI = Math.round((NHPI / totalDeaths) * 100)

    let result = parseRace.black + parseRace.asian + parseRace.hispanic + parseRace.native + parseRace.NHPI + parseRace.white
    console.log(parseRace)
    //console.log(result)
    return (
      <Row class="info" style={{}}>
      <Col style={{flex: "inline-block"}}>
        <strong><h5>COVID19 Death Percentage by Race</h5></strong>
        <Row style={{marginLeft: "1vw"}}><div style={{marginRight: "1vw", backgroundColor: "#99E3E3", height: "25px", width: "25px", borderRadius: "50%"}}></div><p style={{marginRight: "1vw"}}>Black</p><strong><p>{parseRace.black}%</p></strong></Row>
        <Row style={{marginLeft: "1vw"}}><div style={{marginRight: "1vw", backgroundColor: "#68EE8E", height: "25px", width: "25px", borderRadius: "50%"}}></div><p style={{marginRight: "1vw"}}>Asian</p><strong><p>{parseRace.asian}%</p></strong></Row>
        <Row style={{marginLeft: "1vw"}}><div style={{marginRight: "1vw", backgroundColor: "#F59C57", height: "25px", width: "25px", borderRadius: "50%"}}></div><p style={{marginRight: "1vw"}}>Hispanic</p><strong><p>{parseRace.hispanic}%</p></strong></Row>
        <Row style={{marginLeft: "1vw"}}><div style={{marginRight: "1vw", backgroundColor: "#9E5DE7", height: "25px", width: "25px", borderRadius: "50%"}}></div><p style={{marginRight: "1vw"}}>Native American</p><strong><p>{parseRace.native}%</p></strong></Row>
        <Row style={{marginLeft: "1vw"}}><div style={{marginRight: "1vw", backgroundColor: "#7282FA", height: "25px", width: "25px", borderRadius: "50%"}}></div><p style={{marginRight: "1vw"}}>White</p><strong><p>{parseRace.white}%</p></strong></Row>        
        <Row style={{marginLeft: "1vw"}}><div style={{marginRight: "1vw", backgroundColor: "gray", height: "25px", width: "25px", borderRadius: "50%"}}></div><p style={{marginRight: "1vw"}}>Native Hawaiian/Pacific Islander</p><strong><p>{parseRace.NHPI}%</p></strong></Row>        
      </Col>

      <Col>
        <PieChart
        labelPosition={50}
        labelStyle={{fontSize: "6px", textAlign: "center", paddingBottom: "5px"}}
        paddingAngle={5}
        lineWidth={70}
        data={[
          {  value: parseRace.NHPI, color: 'gray' },
          {  value: parseRace.black, color: '#99E3E3' }, // light blue
          {  value: parseRace.asian, color: '#68EE8E' }, //green
          {  value: parseRace.hispanic, color: '#F59C57' }, //orange
          {  value: parseRace.native, color: '#9E5DE7' }, //purple
          {  value: parseRace.white, color: '#7282FA' }, // darker blue
        ]}
        totalValue={100} animate={true}
      />
      </Col>
      </Row>
    )
}
export default StatePopulationIcon

