import React, {useState, useEffect} from 'react'
import { OverlayTrigger, Popover} from 'react-bootstrap'

const useData = (props) => {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://covidtracking.com/api/states?state=${props.toLowerCase()}`)
    .then(response => response.json())
    .then(data => setData(data));
  },[]);
  let positive = "Positive: " + data.positive
  let death = "Deaths: " + data.death
  let recovered = "Recovered: " + data.recovered 
  let update = "Updated: " + data.lastUpdateEt

  return (
    <Popover>
      <Popover.Title as="h3">{props}</Popover.Title>
        <Popover.Content>
            {positive} <br />
            {death} <br />
            {recovered} <br />
            {update}
        </Popover.Content>
    </Popover>
  )
}
  function StateIcon(props){
      return(
        <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 250 }}
        overlay={useData(props.name)}>
       {/*} <button type="button" data-container="body" data-toggle="popover" data-placement="top" data-content="hey there" style={{backgroundColor: "white", borderStyle: "none" }}> */}
          <svg class="bi bi-hexagon-fill" width={props.width} height={props.height} style={{color: '#1096F9'}} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
            <text x="6.5" y="9" fill="blue" style={{fontSize: 2, fontWeight: "bold"}}>{props.name}</text>

          <path fill-rule="evenodd" d="M14 4.577L8 1 2 4.577v6.846L8 15l6-3.577V4.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
        </svg>
     {/*} </button> */}
      </OverlayTrigger>
        )};

export default StateIcon