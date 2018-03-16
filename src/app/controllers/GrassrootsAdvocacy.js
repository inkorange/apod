"use strict";

import React from 'react'
const Store =  require('../models/Store');
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';

@autobind
export default class GrassrootsAdvocacy extends React.Component {

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
            parallax:   {backgroundPosition: 'right ' + top/-4 + 'px'},
            fader: {opacity: (top / window.innerHeight / .75)}
        });
    }

    render() {
        return (
            <article className="homepage">
                <div className="container fullpage parallax grassroots" style={this.state.parallax}>
                    <div className="background_fader" style={this.state.fader}/>
                    <div className="content">
                        <h1>Grassroots Advocacy</h1>
                        <div className="wwd_line grassroots" />
                        <p className="width-6">When it comes to a successful government relations strategy, one of the most influential tools available to clients is a well-developed and effective grassroots advocacy plan. Engaging key stakeholders and the public is vital in gaining positive results for your business, and MASS has the experience and resources to establish a quality and driven grassroots advocacy strategy.</p>
                    </div>
                </div>
                <WhatWeDo/>
            </article>
        )
    }

}
