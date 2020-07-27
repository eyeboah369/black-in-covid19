import React from 'react'
import '../App.css'
import StateIcon from './StateIcon'
import northeast from '../imgs/northeast.jpg'
import southeast from '../imgs/southeast.jpg'
import midwest from '../imgs/midwest.jpg'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class CovidMap extends React.Component {
    constructor(props){
        super(props)
        this.state = {inputState: " "}
    }

    onSubmit = event => {
        event.preventDefault();
        let name = this.name.value;
        this.setState({
            inputState: name
        })
    }
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
                <Row>
                <Col>
                    <h2>Daily Data </h2>
                </Col>
                </Row>
                
                {/* button and row for state search */}
                <Row style={{marginLeft: ".4vw"}}>
                    <form style={{width: "95%"}} onSubmit = {this.onSubmit}>
                        <div class="input-group mb-3">
                        <input  type="text" class="form-control" placeholder="Enter State Initials" 
                        ref={input => this.name = input} />

                        <div style={{marginLeft: ".1vw"}}>
                            <button class="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </div>
                        </div>
                    </form>
                </Row>




                <Row style={{marginLeft: "1vw", marginRight: "1vw", marginBottom: "2vh"}}>
                    <Col style={{boxShadow: "-6px 9.5px 20px -7px #888888", height: "100vh", borderRadius: "6px", marginRight: "1vw", marginBottom: "3vh", paddingLeft: "25vw",paddingTop: "15vw"}}>
                        <StateIcon  name={this.state.inputState} height="7.7em" width="7.7em" />
                    </Col>
                        
                    <Col md={4} style={{backgroundColor: "#EDFBFB", height: "100vh", borderRadius: "6px", boxShadow: "-6px 9.5px 20px -7px #888888"}}>
                    <h2 style={{textAlign: "center"}}>Headlines</h2>
                    </Col>
                </Row>

                {/*<Row style={{marginLeft: "1vw", marginRight: "1vw", marginBottom: "2vh"}}>
                    <Col style={{backgroundImage: `url(${midwest})`,backgroundSize: "100% 100%" ,backgroundColor: "blue", height: "36vh", borderRadius: "6px", marginRight: "1vw"}}>
                        hey
                    </Col>

                    <Col style={{backgroundColor: "orange", height: "36vh", borderRadius: "6px"}}>
                        hey
                    </Col>
                </Row>

                <Row style={{marginLeft: "1vw", marginRight: "1vw"}}>
                    <Col style={{backgroundColor: "blue", height: "36vh", borderRadius: "6px", marginRight: "1vw"}}>
                        hey
                    </Col>

                    <Col style={{backgroundColor: "orange", height: "36vh", borderRadius: "6px"}}>
                        hey
                    </Col>
        </Row> */}
               
        <footer className="App-footer">
        <Col><Link to="/" style={{textDecoration: "none", color: "white"}}>BLACK IN COVID19</Link></Col>
        <Col class="float-right">
        <span style={{float: 'right'}}>
          <a target="_blank" style={{textDecoration: "none", color: "white"}} href="https://github.com/eyeboah369" class="fa fa-github"></a>
          <a target="_blank" style={{textDecoration: "none", color: "white"}} href="https://www.linkedin.com/in/evansyeboah/" class="fa fa-linkedin"></a>
          </span>
        </Col>
      </footer>
            </div>
        )
    }
}
export default CovidMap