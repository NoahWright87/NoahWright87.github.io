import React, { Component } from 'react';
import BaseComponent from './BaseComponent'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

export class Portfolio extends BaseComponent {
    static displayName = Portfolio.name;

    render() {
        return (
            <Container>
                <h1>Portfolio</h1>
                <Row>
                    <Col sm="6">
                        <PortfolioCard title="NoahWright.dev" description="My developer site, hosted on GitHub and built with
                        React." />
                    </Col>
                    <Col sm="6">
                        <PortfolioCard title="Level Up Learning" description="A learning app I've been working on to help my kids
                        work on school.  It came in very handy during the COVID-19 learn-from-home nightmare of 2020"
                        linkUrl="https://github.com/NoahWright87/LevelUpLearning" linkText="View on GitHub" />
                    </Col>
                </Row>
                <Jumbotron flex>
                    <h3>Games</h3>
                    <p>Wanting to make video games is how I originally got into programming.  These are some little projects I
                        made using Unity game engine.</p>
                </Jumbotron>
                <Row>
                    <Col sm="6">
                        <PortfolioCard title="Dot Dodger" description="Simple game where you (the blue dot) tries to avoid the evil
                        red dots for as long as you can.  Gain extra points for getting dangerously close to enemies.  Made in Unity"
                            linkUrl="https://gamesdonewright.itch.io/dot-dodger" linkText="View on itch.io" />
                    </Col>
                    <Col sm="6">
                        <PortfolioCard title="Missile Defender" description="Basic Missile Command clone, made in Unity."
                            linkUrl="https://gamesdonewright.itch.io/missile-defender" linkText="View on itch.io" />
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <PortfolioCard title="Paddles 'n Balls" description="Pong clone, made in Unity"
                            linkUrl="https://gamesdonewright.itch.io/paddles-n-balls" linkText="View on itch.io" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

function PortfolioCard(props) {
    return (
        <Card>  {/*TODO: Include an image, link via that image*/}
            <CardTitle tag="h2">
                {props.title || "Untitled"}
            </CardTitle>
            <CardBody>
                <CardText>{props.description || "No Description"}</CardText>
                <Button href={props.linkUrl || "https://noahwright.dev"} target="_blank">{props.linkText || "Click here"}</Button>
            </CardBody>
        </Card>
    );
}