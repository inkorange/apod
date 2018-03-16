"use strict";

import React from 'react'
const Store =  require('../models/Store');
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';

@autobind
export default class IssueDevelopment extends React.Component {

    constructor(props) {
        super(props);
        this.setStyles = this.setStyles.bind(this);
        this.state = {
            style: {}
        }

    }

    componentDidMount() {
        this.setStyles();
        document.addEventListener("scroll", this.setStyles)
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.setStyles)
    }

    setStyles() {
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        Store.setStore('downwards', top>100);
        this.setState({
            parallax:   {backgroundPosition: 'center ' + top/-4 + 'px'}, //window.innerWidth < 420 ? null : {backgroundPosition: 'right ' + top/-4 + 'px'},
            fader: {opacity: (top / window.innerHeight / .75)}
        });
    }

    render() {
        return (
            <article className="homepage">
                <div className="container fullpage parallax issuedev" style={this.state.parallax}>
                    <div className="background_fader" style={this.state.fader}/>
                    <div className="content">
                        <h1>Issue Development</h1>
                        <div className="wwd_line issue_development" />
                        <p className="width-6">Oftentimes, the most effective way to achieve results is to make sure the decision-makers and key stakeholders are hearing your story. MASS has decades of experience in mobilizing networks of people from across the Commonwealth to bring your message to the elected officials and community groups you are seeking to influence. Getting your story to those who need to hear is a main focus of the services MASS provide.</p>
                    </div>
                </div>
                <WhatWeDo/>
            </article>
        )
    }

}
