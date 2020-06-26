import React from 'react'
import './Timeline.css'
import Fade from 'react-reveal/Fade';
import slavery from '../imgs/slavery.png'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Timeline(){
    return(
        <body data-spy="scroll" data-offset="1" data-target="#verticalScrollspy">
	<div class="container-fluid" style={{ width: "auto", paddingBottom: "40vh", color: "white"}}>
		<div class="row">
			<nav class="col-3 col-sm-2" id="verticalScrollspy">
				<ul class="nav flex-column nav-pills" >
					<li style={{marginBottom: "8vh"}} class="nav-item" ><a class="nav-link active" href="#info1">Slavery and <br /> Emancipation</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info2">Reconstruction</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info3">Jim Crow</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info4">Civil Rights</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info5">New Jim Crow</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info6">Present</a></li>
				</ul>
			</nav>
			<div class="col-9 col-sm-10">
                
				<div id="info1" class="container-fluid" style={{paddingTop: "2vh",justifyContent: "center",alignItems: "center", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Slavery and Emancipation</h1>
					<strong><p>The original sin of the United States </p></strong>
                    <Row  >
                        <Col>
                            <h2>
                                Proported as the basis of the Civil War, slavery is a sin still unrepented for in the US.
                                Even after emancipation, former slaves were free from bondage but not the terror white
                                America had in store. 
                            </h2><br />
                            <h2>
                                The ending of slavery drove the country to prop up the soon to be KKK and federally legalized
                                widespread racial discrimination.
                            </h2>
                        </Col>
                        {/*<Col><img src={slavery} style={{height: "30%", width: "auto%"}}></img></Col>*/}
                    </Row>
				</div>
                
				<div id="info2" class="container-fluid" style={{paddingTop: "2vh", marginTop: "70px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Reconstruction</h1>

				</div>
				<div id="info3" class="container-fluid" style={{paddingTop: "2vh",marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Jim Crow</h1>

				</div>
				<div id="info4" class="container-fluid" style={{paddingTop: "2vh", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Cvil Rights</h1>

				</div>
				<div id="info5" class="container-fluid" style={{paddingTop: "2vh", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>New Jim Crow</h1>

				</div>
				<div id="info6" class="container-fluid" style={{paddingTop: "2vh", marginTop: "50px", boxShadow: "-6px 9.5px 20px -7px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Present</h1>

				</div>
			</div>
		</div>
	</div>
</body>
    )
}
export default Timeline