import React, { Component } from 'react';
import resumeData from './data/resume.json';
var _ = require('lodash');

const groupings = _.chain(resumeData).groupBy('category').map((resumeItems, category) => ({ resumeItems, category })).value();

export class Resume extends Component {
    static displayName = Resume.name;

    render() {
        return (
            <div>
                <h1>Resume</h1>
                <p><i>NOTE: This resume is generated programmatically from <a href="resume.json" target="_blank">this JSON</a>.</i></p>
                <hr />
                {groupings.map(g => (
                    <div>
                        <h1>{g.category}</h1>
                        {g.resumeItems.map(r => (
                            <ResumeItem title={r.title} organization={r.organization} location={r.location}
                                startDate={r.startdate} endDate={r.enddate}
                                accomplishments={r.accomplishments} skills={r.skills} />
                        ))}
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

function ResumeItem(props) {
    //TODO: Format date display as Month, Year
    var dateDisplay;
    if (props.startDate && props.endDate) {
        dateDisplay = <h4>{props.startDate} to {props.endDate}</h4>
    } else if (props.startDate) {
        dateDisplay = <h4>{props.startDate} to Present</h4>
    } else if (props.startDate || props.endDate) {
        dateDisplay = <h4>{props.endDate}</h4>
    } else dateDisplay = null;

    var orgLocDisplay;
    if (props.organization && props.location) orgLocDisplay = <h3>{props.organization}, {props.location}</h3>
    else if (props.organization || props.location) orgLocDisplay = <h3>{props.organization ? props.organization : props.location}</h3>
    else orgLocDisplay = null;
    
    return (
        <div>
            <h2>{props.title}</h2>
            {orgLocDisplay}
            {dateDisplay}
            <ListItems title="Accomplishments" items={props.accomplishments} />
            <ListItems title="Skills" items={props.skills} />
        </div>
    );
}

/*TODO: Take a CSS class name, so not all lists of items have to display the same*/
function ListItems(props) {
if (!props.title || !props.items) return null;
return (
    <div>
        <h3>{props.title}</h3>
        <ul>
            {props.items.map(i => (<li>{i}</li>))}
        </ul>
    </div>
    )
};
