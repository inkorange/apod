"use strict";

import React from 'react'
const Store =  require('../models/Store');
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';

@autobind
export default class HomepageController extends React.Component {

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
            parallax:   {backgroundPosition: 'center ' + top/-4 + 'px'}, //window.innerWidth < 420 ? null : {backgroundPosition: 'center ' + top/-4 + 'px'},
            fader: {opacity: (top / window.innerHeight / .75)}
        });
    }

    render() {
        return (
            <article className="homepage">
                <div className="container fullpage parallax govtaffairs" style={this.state.parallax}>
                    <div className="background_fader" style={this.state.fader}/>
                    <div className="content">
                        <h1>Government Affairs</h1>
                        <div className="wwd_line government_affairs" />
                        <p className="width-6">In today’s political environment, companies of all shapes and sizes must interact with and engage local and state governments. Elected officials, government employees and community advocates are all integral to the political process, and a strong government affairs strategy is essential for any business development plan. Through our extensive experience and network of relationships, MASS can help you customize a government affairs strategy that will meet your needs. Few government affairs companies can match the level of cost-effective and personal counsel provided by MASS.</p>
                    </div>
                </div>
                <WhatWeDo/>
            </article>
        )
    }

}
