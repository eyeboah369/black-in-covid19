import React from 'react'
import '../App.css'
import StateData from './StateData'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

let show = false
class CovidMap extends React.Component {
    constructor(props){
        super(props)
        this.state = {inputState: " "}
    }
    
    onSubmit = event => {
        show = true
        event.preventDefault();
        let name = this.name.value;
        this.setState({
            inputState: name
        })
    }
    renderState(){
        if(show){
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