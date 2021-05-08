import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <Container>
                <Row>
                    <h1>I'm Noah Wright</h1>
                    <h2>Software engineer, husband, father, and Air Force Reservist</h2>
                </Row>
                <Row>
                    <Jumbotron>
                    <h1>My Philosophy</h1>
                    <h2>Leave the place better than you found it</h2>
                    <p>
                        Whether talking about our impact on the environment, the way we way raise our children, or the amount of tech debt 
                        in the repository we're working in, I think it's important that we all make sure to leave behind a net positive 
                        everywhere that we go.  I may not be able to change the world all by myself, but I can make sure I make it a tiny
                        bit better.  If we all do that, we <i>can</i> change the world - together.
                    </p>
                    </Jumbotron>
                </Row>
                <Row>
                    <h1>My Background</h1>
                </Row>
                <Row>
                    <h4>Humble Beginnings</h4>
                </Row>
                <Row>
                    <Col sm={9}>
                        For as long as I can remember, I've wanted to make video games.  As a teenager, I saw other kids playing games
                        on their TI=83 calculators.  Like many of us with hand-me-down calculators, I didn't have the cable that would let me
                        connect to a computer and get games loaded to my TI-83, so I went about creating my own.  The games were simple,
                        but they helped me learn about the basics of variables and program flow.  They were a mess of GOTO statements, but
                        they worked, and that was exciting enough.
                    </Col>
                    <Col sm={3}>
                        //TODO: Picture of TI-83 calculator, preferably the coding interface
                    </Col>
                </Row>
                <Row>
                    <h4>Early Successes</h4>
                </Row>
                <Row>
                    <Col sm={3}>
                        //TODO: Video of my early game effort
                    </Col>
                    <Col sm={9}>
                        In the mid-2000's, a coworker of mine suggested I look into C#.  Microsoft had recently rolled out their indie game
                        marketplace and their DirectX-based XNA framework.  After a lot of tinkering, I was very proud of the little shmup
                        that I had create.  <i>//TODO: Embed YouTube video.</i>  Unfortunately that source code is long lost, but my early game
                        dev efforts live on in that YouTube video.
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        By the late-2000's, I had gotten a job at a small business via a temp agency.  I spent most of my day comparing
                        shipping rates between UPS and USPS to make sure each package used the least expensive shipping method.  Using my
                        self-taught knowledge, I went home and wrote a program to do that work for.  When I told my boss I'd programmed myself
                        out of a job, he was thrilled.  I spent the rest of my time there working different odd jobs at the company, always
                        thinking of how it could be automated or improved.
                    </Col>
                    <Col sm={3}>
                        R
                    </Col>
                </Row>
                <Row>
                    <h4>From small business to big government</h4>
                </Row>
                <Row>
                    Unfortunately, the small business wasn't a viable long-term solution.  I needed health insurance; I wanted to get my
                    bachelor's degree; I needed a career.  After I found out the Air Force needed programmers, it was a short time before
                    I was shipping off to basic training.
                </Row>
                <Row>
                    <Col sm={3}>
                        <i>TODO: Picture of me in uniform</i>
                    </Col>
                    <Col sm={9}>
                        After basic training and technical school, I got orders to Maxwell Air Force Base.  There I finally got to work on a
                        large scale with a team of programmers.  I made friends, learned from the more senior programmers, and got a lot of
                        great leadership experience.
                    </Col>
                </Row>
                <Row>
                    So much leadership experience, in fact, that in 2016, I was selected by my commander to become an instructor at 
                    Maxwell's Airman Leadership School.  Taking me out of the technical role was a chance to grow even better at public
                    speaking, mentorship, and leading teams.  It was an invaluable experience that has helped shape the person I am today.
                </Row>
                <Row>
                    <h4>The best of both worlds</h4>
                </Row>
                <Row>
                    In 2020, I opted to switch from active duty to the Air Force Reserve, becoming a cyber defense operator with the 689th
                    Network Operations Squadron while re-entering the civilian workforce as a software engineer.  I have the unique
                    position of being able to help defend DoD networks while also working on new technologies in the civilian sector, all 
                    while staying close to home where I can spend more time with my amazing wife and four wonderful children.
                </Row>
                <Row>
                    <Col>//TODO: Picture in uniform</Col>
                    <Col>//TODO: Picture in business casual</Col>
                </Row>
                <Row>
                    Does this sound like the story of somebody you want on your team?
                </Row>
                <Row>
                    <Link to='/contact'><Button>get in touch</Button></Link>
                </Row>
            </Container>
        );
    }
}
