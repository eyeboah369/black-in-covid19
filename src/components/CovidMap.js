import React from 'react'
import '../App.css'
import StateData from './StateData'
import stateMap from '../stateMap.json'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class CovidMap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputState: " ",
            show: false
        }
    }
    
    onSubmit = event => {
        this.show = true
        event.preventDefault();
        let name = this.name.value;
        this.setState({
            inputState: name
        })
    }
    renderState(){
        let length = this.state.inputState.length

        //initial state
        if(!this.state.inputState){
                return(
                    <Col style={{alignContent: "center", boxShadow: "-6px 9.5px 20px -7px #888888", height: "100vh", borderRadius: "6px", marginBottom: "3vh",textAlign: "center", paddingTop: "15vw"}}>
                        <h1 style={{}}>Enter State to Begin</h1>
                    </Col>
                )
        }
        //proper input check
        if(this.show){
            if(length == 2 && stateMap.hasOwnProperty(this.state.inputState.toUpperCase())){
                return(
                    <StateData key={this.state.inputState} name={this.state.inputState} />
                )
            }
            else{
                return(
                <Col style={{alignContent: "center", boxShadow: "-6px 9.5px 20px -7px #888888", height: "100vh", borderRadius: "6px", marginBottom: "3vh",textAlign: "center", paddingTop: "15vw"}}>
                    <h1 style={{}}>Enter State to Begin</h1>
                </Col>
                )
            }
        }
        //catch everything else
        else{
            return(
                <Col style={{alignContent: "center", boxShadow: "-6px 9.5px 20px -7px #888888", height: "100vh", borderRadius: "6px", marginBottom: "3vh",textAlign: "center", paddingTop: "15vw"}}>
                     <h1 style={{}}>Enter State to Begin</h1>
                </Col>
            )
        }
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
                    {this.renderState()}
                    <Col md={4} style={{backgroundColor: "#EDFBFB", height: "100vh", borderRadius: "6px", boxShadow: "-6px 9.5px 20px -7px #888888"}}>
                    <h2 style={{textAlign: "center"}}>Headlines</h2>
                    </Col>
                </Row>

               
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