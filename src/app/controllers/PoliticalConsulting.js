"use strict";

import React from 'react'
const Store =  require('../models/Store');
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';

@autobind
export default class PoliticalConsulting extends React.Component {

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
                <div className="container fullpage parallax politicalconsult" style={this.state.parallax}>
                    <div className="background_fader" style={this.state.fader}/>
                    <div className="content">
                        <h1>Political Consulting</h1>
                        <div className="wwd_line political_consulting" />
                        <p className="width-6">MASS understands the role politics plays in business development and corporate success. Our team has a wealth of experience in consulting with individuals, groups and communities on how to navigate the ever-changing political climate. Whether its assisting in political campaigns, or consulting on how to steer through the bureaucracy of local and state governments, MASS can assist you in successfully reaching your goals.</p>
                    </div>
                </div>
                <WhatWeDo/>
            </article>
        )
    }

}
