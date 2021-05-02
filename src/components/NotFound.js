import React, { Component } from 'react';

export class NotFound extends Component {
    static displayName = NotFound.name;

    render() {
        return (
            <div>
                <h1>Uhoh</h1>
                <p>Looks like you tried to go somewhere that doesn't exist!</p>
            </div>
        );
    }
}
