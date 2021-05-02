import React, { Component } from 'react';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <div>
                <hr />
                <div id="footer"> {/*TODO: This isn't exactly centered - fix it*/}
                    <ul> {/*TODO: Loop through array of things?  Or is that overkill?*/}
                        <FooterItem url="https://www.linkedin.com/in/noah-wright-dev/" name="LinkedIn" />
                        <FooterItem url="https://github.com/NoahWright87" name="GitHub" />
                    </ul>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p>Want to peak behind the curtain? Check out <a href="https://github.com/NoahWright87/NoahWright87.github.io" target="_black" >this site's GitHub repo</a></p>
                    <p>©2021 <a href="http://NoahWright.dev">NoahWright.dev</a></p>
                </div>
            </div>
        );
    }
}

function FooterItem(props) {
    return (
        <li>
            <a href={props.url || "#"} target="_blank">{props.name || "UNDEFINED"}</a>
        </li>
    );
}
