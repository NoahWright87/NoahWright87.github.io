import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;

    

    render() {
        return (
            <div>
                <h1>Noah Wright</h1>
                <h2>Software Engineer, Air Force Veteran</h2>
                <p>This is my website.  See the links below for cool stuff!</p>
                <LinkCard title="Resume" linkUrl="resume" description="Read about my work history" />
                <LinkCard title="Portfolio" linkUrl="portfolio" description="See examples of my work" />
                <LinkCard title="About Me" linkUrl="about-me" description="Learn about the man behind the site" />
                <LinkCard title="Contact Me" linkUrl="contact" description="Get in touch" />
            </div>
        );
    }
}

function LinkCard(props) {
    return (
        <div>
            <h1>{props.title || "Untitled"}</h1>
            <p>{props.description || "No Description"}</p>
            <p><Link to={props.linkUrl || "#"}>{props.linkText || "Click here"}</Link></p>
        </div>
    );
}