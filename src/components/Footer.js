import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';

const centering = {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
};

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <Container style={centering} >
                <hr />
                <ButtonGroup size="sm">
                    <FooterItem url="https://www.linkedin.com/in/noah-wright-dev/" name="LinkedIn" />
                    <FooterItem url="https://github.com/NoahWright87" name="GitHub" />
                </ButtonGroup>
                <Container>
                    <p>Want to peak behind the curtain? Check out <a href="https://github.com/NoahWright87/NoahWright87.github.io" target="_black" >this site's GitHub repo</a></p>
                    <p>&#169; {new Date().getFullYear()} <a href="http://NoahWright.dev">NoahWright.dev</a></p>
                </Container>
            </Container>
        );
    }
}

function FooterItem(props) {
    return (
        <Button href={props.url || "#"} target="_blank">
            {props.name || "UNDEFINED"}
        </Button>
    );
}
