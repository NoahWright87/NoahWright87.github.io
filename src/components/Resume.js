import React, { Component } from 'react';
import BaseComponent from './BaseComponent'
import { Container, Row, Col, Jumbotron, CardSubtitle, List } from 'reactstrap';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap';
import resumeData from './data/resume.json';
var _ = require('lodash');

const groupings = _.chain(resumeData).groupBy('category').map((resumeItems, category) => ({ resumeItems, category })).value();

export class Resume extends BaseComponent {
    static displayName = Resume.name;

    render() {
        return (
            <Container>
                <h1>Resume</h1>
                <p><i>NOTE: This resume is generated programmatically from <a href="resume.json" target="_blank">this JSON</a>.</i></p>
                {groupings.map(g => (
                    <Container>
                        <Jumbotron className="display-4">
                            {g.category}
                        </Jumbotron>
                        {g.resumeItems.map(r => (
                            <ResumeItem title={r.title} organization={r.organization} location={r.location}
                                startDate={r.startdate} endDate={r.enddate} showMonths="true"
                                accomplishments={r.accomplishments} skills={r.skills} />
                        ))}
                    </Container>
                ))}
            </Container>
        );
    }
}

const monthYearFormat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short" });
const yearFormat = new Intl.DateTimeFormat("en-US", { year: "numeric" });


function ResumeItem(props) {
    var dateDisplay;
    var dateFormat = props.showMonths ? monthYearFormat : yearFormat;
    if (props.startDate && props.endDate) {
        dateDisplay = <h4>{dateFormat.format(new Date(props.startDate))} to {dateFormat.format(new Date(props.endDate))}</h4>
    } else if (props.startDate) {
        dateDisplay = <h4>{dateFormat.format(new Date(props.startDate))} to Present</h4>
    } else if (props.startDate || props.endDate) {
        dateDisplay = <h4>{dateFormat.format(new Date(props.endDate))}</h4>
    } else dateDisplay = null;

    var orgLocDisplay;
    if (props.organization && props.location) orgLocDisplay = <h3>{props.organization}, {props.location}</h3>
    else if (props.organization || props.location) orgLocDisplay = <h3>{props.organization ? props.organization : props.location}</h3>
    else orgLocDisplay = null;
    
    return (
        <Card>
            <CardTitle>
                <h2>{props.title}</h2>
            </CardTitle>
            <CardSubtitle>
                <Row>
                    <Col sm="9">
                        {orgLocDisplay}
                    </Col>
                    <Col sm="3" className="text-right">
                        {dateDisplay}
                    </Col>
                </Row>
            </CardSubtitle>
            <CardBody>
                <ListItems title="Accomplishments" items={props.accomplishments} />
                <ListItems title="Skills" items={props.skills} useBadges="true" />
            </CardBody>
        </Card>
    );
}

/*TODO: Take a CSS class name, so not all lists of items have to display the same*/
function ListItems(props) {
    if (!props.title || !props.items) return null;
    if (props.useBadges) return (
        <div>
            {/*{props.title} : */}{props.items.map(i => (<Badge>{i}</Badge>))}
        </div>
    ); else return (
        <div>
            {/*<h3>{props.title}</h3>*/}
            <List>
                {props.items.map(i => (<li>{i}</li>))}
            </List>
        </div>
    );
};
