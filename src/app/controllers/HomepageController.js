"use strict";

import React from 'react'
import { Link } from 'react-router-dom'
const Store =  require('../models/Store');
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';
import { Icon } from '../elements/Icon';

@autobind
export default class HomepageController extends React.Component {

    constructor(props) {
        super(props);
        this.setStyles = this.setStyles.bind(this);
        this.state = {
            panel1: {backgroundPosition: ''},
            downwards: false
        }

    }

    componentDidMount() {
        this.setStyles();
        document.addEventListener("scroll", this.setStyles);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.setStyles)
    }

    setStyles() {
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        let ratio = -4;
            Store.setStore('downwards', top > 100);
            this.setState({
                panel1: window.innerWidth < 420 || top > window.innerHeight ? null : {backgroundPosition: 'center ' + top / ratio + 'px'},
                fader: {opacity: (top / window.innerHeight / .75)},
                downwards: top > 100
            });
    }

    render() {
        return (
            <article className="homepage">
                <div className="container fullpage panel1" style={this.state.panel1}>
                    <div className="background_fader" style={this.state.fader}/>
                    <div className="content">
                        <h1>Delivering Effective Results.</h1>
                    </div>
                    <div className={"followMe " + (this.state.downwards ? "hideit" : "")}>
                        <Icon iconid="down" color="white" size="50px" />
                    </div>
                </div>
                <div id="who_we_are" className="container fullpage who_we_are">
                    <div className="transitional">
                        <img src="images/wwa-top.png"/>
                    </div>
                    <div className="content">
                        <div className="left-3">
                            <h3>Who We Are</h3>
                            <p>Mid-Atlantic Strategic Solutions (MASS) is a full-service government affairs and political advocacy firm located in Pennsylvania’s Capital City.</p>
                            <p>The professionals at MASS utilize their vast political networks and government relations experience to successfully advocate for issues important to our clients. Building and maintaining relationships are key, and MASS has a proven track record of maximizing clients’ outreach and advocacy across all political spectrums and at all levels of government.</p>
                            <p>Simply put – MASS gets results. Through our group of driven and dedicated professionals, MASS delivers the outcomes our clients expect.</p>
                        </div>
                    </div>
                </div>
                <WhatWeDo/>
                <div id="how_we_operate" className="container how_we_operate">
                    <div className="image_panel how_we_operate">
                        <div className="content bottom">
                            <h3 className="left-3">HONESTY. INTEGRITY. COMMUNICATION.<br/>RESULTS.</h3>
                        </div>
                    </div>
                    <div className="content">
                        <div className="quote">
                            <p>“Character may be called the most effective means of persuasion.”</p>
                            <p className="right_align">–Aristotle</p>
                        </div>
                        <div className="left-3">
                            <h3>How We Operate</h3>
                            <p>At MASS, our philosophy is simple – an honest and open approach to government affairs and political consulting.</p>
                            <p>We pride ourselves on our honesty, integrity and character to deliver the results our clients expect. Our positive reputation in communities across the Commonwealth helps us to build sustainable relationships that are critical in today’s business environment. And through the strength of our character, our open communication and our commitment to our clients, we work each day to deliver effective results and consistent success.</p>
                        </div>
                    </div>
                </div>
                <div className="container meet_the_team">
                    <div className="content">
                        <div>
                            <h3>Meet the Team</h3>
                            <div className="team_panels">
                                <Link to="/Team#Thomas" className="bill">>
                                    <div>
                                        <h3>Bill Thomas</h3>
                                        <p>President</p>
                                    </div>
                                </Link>
                                <Link to="/Team#Feidt" className="dave">
                                    <div>
                                        <h3>Dave Feidt</h3>
                                        <p>Senior Partner</p>
                                    </div>
                                </Link>
                                <Link to="/Team#Hubiak" className="alicia">
                                    <div>
                                        <h3>Alicia Hubiak</h3>
                                        <p>Grassroots & Political Associate</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }

}
