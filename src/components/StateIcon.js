import React, {useState, useEffect} from 'react'
import southeast from '../imgs/southeast.jpg'
import { OverlayTrigger, Popover, Modal, Button, Row, Col} from 'react-bootstrap'

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

const useDataModal = (props) => {
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
    <span>
      {positive} <br />
      {death} <br />
      {recovered} <br />
      {update}
    </span>

  )
}

  function StateIcon(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
      return(
        <span>
        <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 250 }}
        overlay={useData(props.name)}>
       {/*} <button type="button" data-container="body" data-toggle="popover" data-placement="top" data-content="hey there" style={{backgroundColor: "white", borderStyle: "none" }}> */}
          <svg class="bi bi-hexagon-fill" onClick={handleShow} width={props.width} height={props.height} style={{color: '#1096F9'}} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
            <text x="6.5" y="9" fill="black" style={{fontSize: 2, fontWeight: "bold"}}>{props.name}</text>

          <path fill-rule="evenodd" d="M14 4.577L8 1 2 4.577v6.846L8 15l6-3.577V4.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
        </svg>
     {/*} </button> */}
     
      </OverlayTrigger>

      <Modal size="lg"  dialogClassName="modal-90w"show={show} onHide={handleClose} >
        <Modal.Header style={{backgroundImage: `url(${southeast})`,backgroundSize: "100% "}} closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
            {useDataModal(props.name)}
            </Col>
            <Col>
            hey
            </Col>

          </Row>






        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </span>
        )};

export default StateIcon