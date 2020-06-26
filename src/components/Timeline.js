import React from 'react'
import './Timeline.css'
import Fade from 'react-reveal/Fade';

function Timeline(){
    return(
        <body data-spy="scroll" data-offset="1" data-target="#verticalScrollspy">
	<div class="container-fluid" style={{ width: "auto", paddingBottom: "40vh", color: "white"}}>
		<div class="row">
			<nav class="col-3 col-sm-2" id="verticalScrollspy">
				<ul class="nav flex-column nav-pills" >
					<li class="nav-item" ><a class="nav-link active" href="#slavery">Slavery</a></li>
					<li class="nav-item"><a class="nav-link" href="#cats">Emancipation</a></li>
					<li class="nav-item"><a class="nav-link" href="#fish">Jim Crow</a></li>
					<li class="nav-item"><a class="nav-link" href="#penguins">Civil Rights</a></li>
					<li class="nav-item"><a class="nav-link" href="#alpacas">New Jim Crow</a></li>
					<li class="nav-item"><a class="nav-link" href="#rabbits">Present</a></li>
				</ul>
			</nav>
			<div class="col-9 col-sm-10">
                
				<div id="slavery" class="container-fluid" style={{justifyContent: "center",alignItems: "center", marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Slavery</h1>
					<strong><p>The original sin of the United States </p></strong>


				</div>
                
				<div id="cats" class="container-fluid" style={{marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Cats</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="fish" class="container-fluid" style={{marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Fish</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="penguins" class="container-fluid" style={{marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Penguins</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="alpacas" class="container-fluid" style={{marginTop: "50px", boxShadow: "-8px 15px 10px -3px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Alpacas</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="rabbits" class="container-fluid" style={{marginTop: "50px", boxShadow: "-6px 9.5px 20px -7px #888888", height: "95vh", backgroundColor: "#282c34"}}>
					<h1>Rabbits</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
			</div>
		</div>
	</div>
</body>
    )
}
export default Timeline