import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class BaseComponent extends Component {
    componentDidMount() {
        //alert(window.location.pathname + window.location.search);
        ReactGA.pageview(window.location.pathname + window.location.search);

        window.scrollTo(0, 0);
    }
}