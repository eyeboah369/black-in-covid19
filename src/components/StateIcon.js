import React from 'react'
import { OverlayTrigger, Tooltip} from 'react-bootstrap'
import  ModalData from './ModalData'


  function StateIcon(props){
      return(
        <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 250 }}
        overlay={<Tooltip><ModalData name={props.name} /></Tooltip>}
        >
             <svg class="bi bi-hexagon" width="8em" height="8em" style={{color: '#1096F9'}} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                <text x="6.5" y="9" fill="black" style={{fontSize: 2, fontWeight: "bold"}}>{props.name}</text>

             <path fill-rule="evenodd" d="M14 4.577L8 1 2 4.577v6.846L8 15l6-3.577V4.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
            </svg>
        </OverlayTrigger>
      )};

export default StateIcon