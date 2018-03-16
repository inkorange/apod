"use strict";

import React from 'react'
const Store =  require('../models/Store');
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';

@autobind
export default class NetworkDevelopment extends React.Component {

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
                <div className="container fullpage parallax network" style={this.state.parallax}>
                    <div className="background_fader" style={this.state.fader}/>
                    <div className="content">
                        <h1>Network Development</h1>
                        <div className="wwd_line network_development" />
                        <p className="width-6">In the political arena, relationships matter. MASS prides itself on building a network of stakeholders and decision-makers that cultivate productive relationships for our clients. Our team of professionals can help you build, maintain and develop relationships that will assist you in navigating the red-tape that might very well mean success or defeat for your company. We know the people making the decisions and we have the experience to help you manage the political climate.</p>
                    </div>
                </div>
                <WhatWeDo/>
            </article>
        )
    }

}
