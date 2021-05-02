import React, { Component } from 'react';

export class Portfolio extends Component {
    static displayName = Portfolio.name;

    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <p><em>This is where I'll put my portfolio stuff.  What follows is a placeholder.</em></p>

                <PortfolioCard title="Placeholder" description="Description of Placeholder project" />
                <PortfolioCard title="This Dev Site" description="My developer site, hosted on GitHub and built in React." />
                <PortfolioCard title="Google" description="Google, a site I *definitely* made.  Actually this
                    is just to make sure off-site links work just fine." linkUrl="http://www.google.com" />

            </div>
        );
    }
}

function PortfolioCard(props) {
    return (
        <div>  {/*TODO: Include an image, link via that image*/}
            <h1>{props.title || "Untitled"}</h1>
            <p>{props.description || "No Description"}</p>
            <p><a href={props.linkUrl || "https://noahwright.dev"} target="_blank">{props.linkText || "Click here"}</a></p>
        </div>
    );
}