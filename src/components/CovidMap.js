import React from 'react'
import '../App.css';
import StateIcon from './StateIcon'
import { Container, Row, Col, Button } from 'react-bootstrap'

class CovidMap extends React.Component {
    render() {
        return(
            <div>
                <header className="App-header">
                    <Col>BLACK IN COVID19</Col>
                    <Col class="float-right">
                        <span style={{float: 'right'}}>
                            Evans Yeboah
                        </span>
                    </Col>
                </header>
            <StateIcon name="NM" />
            </div>
        )
    }
}
export default CovidMap