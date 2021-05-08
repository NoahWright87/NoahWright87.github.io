import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

export class Portfolio extends Component {
    static displayName = Portfolio.name;

    render() {
        return (
            <Container>
                <h1>Portfolio</h1>
                <p><em>This is where I'll put my portfolio stuff.  What follows is a placeholder.</em></p>

                <Row>
                    <Col sm="6">
                        <PortfolioCard title="NoahWright.dev" description="My developer site, hosted on GitHub and built with
                        React." />
                    </Col>
                    <Col sm="6">
                        <PortfolioCard title="Google" description="Google, a site I *definitely* made.  Actually this
                        is just to make sure off-site links work just fine." linkUrl="http://www.google.com" />
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <PortfolioCard title="Placeholder" description="Description of Placeholder project" />
                    </Col>
                    <Col sm="6">
                        <PortfolioCard title="Another Placeholder" description="Description of Another Placeholder project" />
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