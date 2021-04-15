import portrait from './noahwright.jpg'
import React from 'react';
import { Container, Button, Col, Row, Image } from 'react-bootstrap'
import Bootstrap from 'react-bootstrap'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">

	  
	  <Container>
		<Row>
			<Col sm={4} align="right">
				<Image src={portrait} roundedCircle width="128" fluid />
			</Col>
			<Col sm={8}>
				<h1 class="display-5">Noah Wright</h1>
				<h2 class="display-6">Software Developer &amp; Air Force Veteran</h2> center this
			</Col>
		</Row>

		</Container>
	  <Container fluid class=" alert-primary" align="center">
		Need a motivated software engineer for your team? <Button variant="primary" href="contact.html">Get in touch</Button>
	  </Container>
	
	  <LinkCard title="Resume" description="Description of my resume" linkText="Here" />
	  <LinkCard title="Porfolio" description="Want to see the things I've done?" />
	  <LinkCard title="About" description="Find out who Noah Wright is" linkText="Read my story" />
	  <LinkCard title="Contact" description="Need to contact me?" linkText="Get in touch" />
	
	
      </header>
    </div>
  );
}

function LinkCard(props) { return (
	<div class="card-body">
		<div class="card-title"><h2>{props.title}</h2></div>
		<div>{props.description}</div>
		<div>
			<a href="#" class="btn-primary">{props.linkText || "Check it out"}</a>
		</div>
	</div>
) }

export default Home;
