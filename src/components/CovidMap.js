import React from 'react'
import '../App.css';
import StateIcon from './StateIcon'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class CovidMap extends React.Component {
    render() {
        return(
            <div>
                <header className="App-header" style={{marginBottom: "3vh"}}>
                    <Col><Link to="/" style={{textDecoration: "none", color: "white"}}>BLACK IN COVID19</Link></Col>
                    <Col class="float-right">
                        <span style={{float: 'right'}}>
                            Evans Yeboah
                        </span>
                    </Col>
                </header>
                <form class="form-inline my-2 my-lg-0" style={{float: "right", marginRight: "3vw"}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search State" aria-label="Search" />
                    <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
                <h2 style={{dipslay: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>Daily Data </h2>
               <Container style={{display: "inline-flex",alignItems: "center", justifyContent: "center", flexDirection: "row", textAlign: "center"}}>
                
                <div style={{dipslay: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>

                <StateIcon name="AL"/>
                <StateIcon name="AK"/>
                <StateIcon name="AZ"/>
                <Col style={{marginLeft: ""}}>
                <StateIcon name="AR"/>
                <StateIcon name="CA"/>
                </Col>
                <StateIcon name="CO"/>
                <StateIcon name="CT"/>
                <StateIcon name="DE"/>
                <Col style={{marginLeft: ""}}>
                <StateIcon name="FL"/>
                <StateIcon name="GA"/>
                </Col>
                <StateIcon name="HI"/>
                <StateIcon name="ID"/>
                <StateIcon name="IL"/>
                </div>
                
                <div style={{dipslay: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>

                <StateIcon name="IN"/>
                <StateIcon name="IA"/>
                <StateIcon name="KS"/>
                <Col style={{marginLeft: ""}}>
                <StateIcon name="KY"/>
                <StateIcon name="LA"/>
                </Col>
                <StateIcon name="ME"/>
                <StateIcon name="ME"/>
                <StateIcon name="MD"/>
                <Col style={{marginLeft: ""}}>
                <StateIcon name="MA"/>
                <StateIcon name="MI"/>
                </Col>
                <StateIcon name="MN"/>
                <StateIcon name="MS"/>
                <StateIcon name="MO"/>
                </div>

                <div style={{dipslay: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>

                <StateIcon name="MT"/>
                <StateIcon name="NE"/>
                <StateIcon name="NV"/>
                <Col style={{marginLeft: ""}}>
                <StateIcon name="NH"/>
                <StateIcon name="NJ"/>
                </Col>
                <StateIcon name="NM"/>
                <StateIcon name="NY"/>
                <StateIcon name="NC"/>
                <Col style={{marginLeft: ""}}>
                <StateIcon name="ND"/>
                <StateIcon name="OH"/>
                </Col>
                <StateIcon name="OK"/>
                <StateIcon name="OR"/>
                <StateIcon name="PA"/>
                </div>
                </Container>
    </div>
        )
    }
}
export default CovidMap