import React from 'react'
import './Timeline.css'

function Timeline(){
    return(
        <body data-spy="scroll" data-offset="1" data-target="#verticalScrollspy">
	<div class="container-fluid" style={{ width: "auto", background: "#0E5866", paddingBottom: "40vh"}}>
		<div class="row">
			<nav class="col-3 col-sm-2" id="verticalScrollspy">
				<ul class="nav flex-column nav-pills">
					<li class="nav-item"><a class="nav-link active" href="#dogs">Dogs</a></li>
					<li class="nav-item"><a class="nav-link" href="#cats">Cats</a></li>
					<li class="nav-item"><a class="nav-link" href="#fish">Fish</a></li>
					<li class="nav-item"><a class="nav-link" href="#penguins">Penguins</a></li>
					<li class="nav-item"><a class="nav-link" href="#alpacas">Alpacas</a></li>
					<li class="nav-item"><a class="nav-link" href="#rabbits">Rabbits</a></li>
				</ul>
			</nav>
			<div class="col-9 col-sm-10">
				<div id="dogs" class="container-fluid" style={{marginTop: "50px", backgroundColor: "#F5F7F7", borderRadius: "12px"}}>
					<h1>Dogs</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="cats" class="container-fluid">
					<h1>Cats</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="fish" class="container-fluid">
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
				<div id="penguins" class="container-fluid">
					<h1>Penguins</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="alpacas" class="container-fluid">
					<h1>Alpacas</h1>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
					<p>Look at the navigation menu to see how it interacts with scrolling over this segment</p>
				</div>
				<div id="rabbits" class="container-fluid">
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