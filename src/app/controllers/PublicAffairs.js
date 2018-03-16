"use strict";

import React from 'react'
const Store =  require('../models/Store');
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';

@autobind
export default class PublicAffairs extends React.Component {

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
            parallax:   {backgroundPosition: 'right ' + top/-4 + 'px'}, //window.innerWidth < 420 ? null : {backgroundPosition: 'right ' + top/-4 + 'px'},
            fader: {opacity: (top / window.innerHeight / .75)}
        });
    }

    render() {
        return (
            <article className="homepage">
                <div className="container fullpage parallax publicaffairs" style={this.state.parallax}>
                    <div className="background_fader" style={this.state.fader}/>
                    <div className="content">
                        <h1>Public Affairs</h1>
                        <div className="wwd_line public_affairs" />
                        <p className="width-6">An effective message is the linchpin to a successful advocacy and government relations strategy. Without a viable public affairs plan, issues can get lost amid the noise. MASS will work with you to develop a message that will support your issue or campaign, and will help garner the support you need inside and outside of the State Capitol. Sometimes an issue is won or lost in the court of public opinion, and MASS will help you craft a strategy that will deliver positive results for your company.</p>
                    </div>
                </div>
                <WhatWeDo/>
            </article>
        )
    }

}
