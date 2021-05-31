import React, { Component } from 'react';
import BaseComponent from './BaseComponent'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
//TODO: Create "howitsmade" component with popover, put it on this page as a "how it's done" and explain the technology used
//  Then use it elsewhere as well

export class Home extends BaseComponent {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h1>I'm Noah - a software developer</h1>
                        <p>Take a look around and see what I've been up to.  Think I'd be a good addition
                            to your dev team or open source project?</p>
                        <Link to="contact"><Button>Hit me up!</Button></Link>
                    </Jumbotron>
                </Container>
                <Container>
                    <Row>
                        <Col sm="6">
                            <HomeCard title="Resume" linkUrl="resume" description="Read about my work history" />
                        </Col>
                        <Col sm="6">
                            <HomeCard title="Portfolio" linkUrl="portfolio" description="See examples of my work" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <HomeCard title="About Me" linkUrl="about-me" description="Learn about the man behind the site" />
                        </Col>
                        <Col sm="6">
                            <HomeCard title="Contact Me" linkUrl="contact" description="Get in touch" />
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }
}

function HomeCard(props) {
    return (
        <Card body>
            <CardTitle tag="h4">
                {props.title || "Untitled"}
            </CardTitle>
            <CardBody>
                <CardText>{props.description || "No Description"}</CardText>
                <Link to={props.linkUrl || "#"}><Button>{props.linkText || "Click here"}</Button></Link>
            </CardBody>
        </Card>
    );
}
