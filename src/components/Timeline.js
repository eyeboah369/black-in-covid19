import React from 'react'
import './Timeline.css'
import Fade from 'react-reveal/Fade';
import slavery from '../imgs/slavery.png'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Timeline(){
    return(
        <body data-spy="scroll" data-offset="1" data-target="#verticalScrollspy">
	<div class="container-fluid" style={{ width: "auto", paddingBottom: "40vh", color: "white", alignItems: "center", justifyContent: "center"}}>
		<div class="row">
			{/*<nav class="col-3 col-sm-2" id="verticalScrollspy">
				<ul class="nav flex-column nav-pills" >
					<li style={{marginBottom: "8vh"}} class="nav-item" ><a class="nav-link active" href="#info1">Slavery and <br /> Emancipation</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info2">Reconstruction</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info3">Jim Crow</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info4">Civil Rights</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info5">New Jim Crow</a></li>
					<li style={{marginBottom: "8vh"}}class="nav-item"><a class="nav-link" href="#info6">Present</a></li>
				</ul>
            </nav>*/}
			<div id="timelineRow" class="col-9 col-sm-10" style={{marginLeft: "8vw"}}>
                
                <Fade right>
				<div id="info1" class="container-fluid" style={{paddingTop: "2vh", paddingLeft: "1vw", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "99vh", backgroundColor: "#282c34"}}>
					<h1>Slavery and Emancipation</h1>
					<strong><p>The original sin of the United States </p></strong>
                    <Row  >
                        <Col>
                            <h2>
                                Purported as the basis of the Civil War, slavery is a sin still unrepented for in the US.
                                Even after emancipation, former slaves were free from bondage but not the terror white
                                America had in store. 
                            </h2><br />
                            <h2>
                                The ending of slavery drove the country to prop up the soon to be KKK and federally legalized
                                widespread racial discrimination throuhg the Black Codes and the infamous war torn Jim Crow Era
                                that laid the initial foundation to the racist system we live in today.
                            </h2>
                        </Col>
                        {/*<Col><img src={slavery} style={{height: "30%", width: "auto%"}}></img></Col>*/}
                    </Row>
				</div>
                </Fade>

                <Fade right>
				<div id="info2" class="container-fluid" style={{paddingTop: "2vh", paddingLeft: "1vw", marginTop: "70px", boxShadow: "-8px 15px 10px -3px #888888", height: "99vh", backgroundColor: "#282c34"}}>
					<h1>Reconstruction</h1>
                    <strong><p>The cycle of slavery evolved and continued.</p></strong>
                    <Row>
                        <Col>
                            <h2>
                                After the Civil War, Reconstruction was an effort to rebuild much of the destroyed south and repair
                                the fractured Union. Bringing the country together meant reuniting white society and terrorizing
                                Black people through the Black Codes.
                            </h2><br />
                            <h2>
                                The Black Codes were a set of laws enacted by several states that limited the opportunities Black 
                                people had in housing, education, and labor. This ensured that they would be forced to re enter into 
                                slave like occupations with little freedom and so the cycle continued.
                            </h2>
                        
                        </Col>
                    </Row>
				</div>
                </Fade>

                <Fade right>
				<div id="info3" class="container-fluid" style={{paddingTop: "2vh", paddingLeft: "1vw", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "99vh", backgroundColor: "#282c34"}}>
					<h1>Jim Crow</h1>
                    <strong><p>Over 100 years or terror after slavery.</p></strong>

                    <Row>
                        <Col>
                            <h2>
                                With the increase of domestic terrorism led by the KKK and Reconstruction over, Black people began moving
                                to larger cities and in an effor to continue racialized discrimination and terror Jim Crow laws swept the nation.
                                These laws were the powerful force for over 100 years that molded and shaped the deep rooted racism in our society.
                            </h2><br />
                            <h2>From the highest levels of government to the streets of major cities, white people sought to create conditions for
                                Black people that would begin the onset of underlying health issues, generational lack of wealth, innability
                                to access certain jobs and discrimination in health care. This was an era in which every attemp Black people made
                                to fight for equality was shut down by a country built upon racism.
                            </h2>
                        
                        
                        </Col>
                    </Row>

				</div>
                </Fade>

                <Fade right>
				<div id="info4" class="container-fluid" style={{paddingTop: "2vh", paddingLeft: "1vw", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "99vh", backgroundColor: "#282c34"}}>
					<h1>Cvil Rights</h1>
                    <strong><p>A new period of hope in the Black Community</p></strong>
                    <Row>
                        <Col>
                        <h2>
                            In spite of the mounting racial terror of the time, the Civil Rights Movement was born in the 1940s and lasted with great effect
                            into the 1960. From Brown v. Board, to Emmett Till, to The Little Rock Nine, progress was being made all throughout this
                            period to advance the eqaul rights of Black people in America.
                        </h2><br />
                        <h2>
                            The Civil Rights Act of 1964 was a landmark decision that in principle outlawed discrimination due to sex, color, race,
                            or country of origin.This was a great stride in the right direction, however as is the case with racism, America still persisted 
                            in subverting this new Act and found new ways to continue the discrimination perpetuated by Jim Crow. This only worsening underlying
                            racism in America.
                        </h2>
                        
                        </Col>
                    </Row>

				</div>
                </Fade>

                <Fade right>
				<div id="info5" class="container-fluid" style={{paddingTop: "2vh", paddingLeft: "1vw", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "99vh", backgroundColor: "#282c34"}}>
					<h1>New Jim Crow</h1>
                    <Row>
                        <Col>
                            <h2>
                                A term popularized through the accounts of Michelle Alexander in her book <i>The New Jim Crow: Mass Incarceration 
                                in the Age of Colorblindness</i>. In the book it talks about the shocking facts of the prison system and how 
                                criminal "injustice" is used to continue holding down the advancement of the Black Community. 
                            </h2><br />
                            <h2>
                                The New Jim Crow is an book published in 2010, only a decade ago and yet, the ideologies and stigmas of an age of
                                terror on the Black Community continues to this day. Despite how far this nation has come it has yet to undo the
                                centuries of impediment put on Black people and the stigma of being Black in America.
                            </h2>
                        
                        
                        </Col>
                    </Row>

				</div>
                </Fade>

                <Fade right>
				<div id="info6" class="container-fluid" style={{paddingTop: "2vh", paddingLeft: "1vw", marginTop: "50px", boxShadow: "-6px 9.5px 20px -7px #888888", height: "99vh", backgroundColor: "#282c34"}}>
					<h1>Present</h1>
                    <Row>
                        <Col>
                            <h2>
                                Now in this present day and age we have a choice to make about the future of this nation. There is power in knowledge
                                just as there is power in a lack of knowledge. Those who seek to perpetuate racism and inequality will continue to profit 
                                off the ignorance of the public on the ways in which racism is killing Black people constantly. So we have a choice to make.
                                We can levrage the facts and work towards a better fututre, or allow history to repeat itself. The future is yet to be written,
                                so what will you do?
                            </h2>
                        
                        </Col>
                    </Row>

				</div>
                </Fade>
			</div>
		</div>
	</div>
</body>
    )
}
export default Timeline