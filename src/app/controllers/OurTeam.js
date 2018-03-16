"use strict";

import React from 'react'
const Store =  require('../models/Store');
import { Icon } from '../elements/Icon';
import {WhatWeDo}   from '../elements/WhatWeDo'
import { autobind } from 'core-decorators';

@autobind
export default class OurTeam extends React.Component {

    constructor(props) {
        super(props);
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
    }

    render() {
        let metaA = '{ "@context": "http://schema.org", "@type": "Organization", "url": "http://www.midatlanticss.com/Team", "name": "Meet the Team", "Person": {"@type": "Person", "givenName": "Bill", "familyName" : "Thomas", "email": "wthomas@midatlanticss.com"}}';
        let metaB = '{ "@context": "http://schema.org", "@type": "Organization", "url": "http://www.midatlanticss.com/Team", "name": "Meet the Team", "Person": {"@type": "Person", "givenName": "Dave", "familyName" : "Feidt", "email": "dfeidt@midatlanticss.com"}}';
        let metaC = '{ "@context": "http://schema.org", "@type": "Organization", "url": "http://www.midatlanticss.com/Team", "name": "Meet the Team","Person": {"@type": "Person", "givenName": "Alicia", "familyName" : "Hubiak", "email": "ahubiak@midatlanticss.com"}}';
        return (
            <article className="ourteam">
                <div className="container">
                    <div style={{marginTop: '160px'}} className="image_panel how_we_operate">
                        <div className="content bottom">
                            <h3 className="left-3">MEET THE TEAM</h3>
                            <h3 className="left-3">HONESTY. INTEGRITY. COMMUNICATION.<br/>RESULTS.</h3>
                        </div>
                    </div>
                    <div className="content our_team">
                        <div id="Thomas">
                            <div className="left-3" style={{position: 'relative'}}>
                                <script type="application/ld+json">
                                    {metaA}
                                </script>
                                <div className="headshot Thomas"></div>
                                <h3>Bill Thomas</h3>
                                <p className="header">President</p>
                                <p>Bill is a seasoned government relations and political affairs professional, with significant experience influencing public policy at the state and local level.</p>
                                <p>As president of MASS, Bill utilizes his government affairs experience, and vast understanding of the legislative and political processes, to advocate for issues important to clients. And through his wide range of contacts, Bill engages elected officials, stakeholders and grassroots partners to deliver effective results.</p>
                                <p>Prior to joining MASS, Bill was a key staff person within the Pennsylvania legislature. He is the former Leadership Executive Director of the Office of the Pennsylvania House Democratic Caucus Secretary, serving as a reliable member of the House Democratic Caucus leadership staff team. Prior to joining the leadership ranks, Bill served as the Executive Director of the Pennsylvania House Gaming Oversight Committee from 2010 until 2014, where he gained significant experience in gaming policy, which he continued to influence up until he left the House in 2017. Bill also served as the Deputy Communications Director for the House Majority Leader from 2008 to 2010.</p>
                                <p>Before arriving in Pennsylvania and working for the Pennsylvania House of Representatives, Bill served as the Assistant Director of the West Virginia Legislative Reference and Information Center, a nonpartisan, apolitical office of the West Virginia Legislature.</p>
                                <p>A native of Long Island, New York, Bill is a graduate of the University of Charleston in Charleston, West Virginia. He currently lives in Harrisburg, Pennsylvania with his wife Shelly and two children.</p>
                                <div><a href="mailto:wthomas@midatlanticss.com"><Icon basestyle={{position: 'relative', top: '2px', marginRight: '7px'}} iconid="mail" size="15px" color="black"></Icon>wthomas@midatlanticss.com</a></div>
                            </div>
                        </div>
                        <div id="Feidt">
                            <div className="left-3" style={{position: 'relative'}}>
                                <script type="application/ld+json">
                                    {metaB}
                                </script>
                                <div className="headshot Feidt"></div>
                                <h3>DAVE FEIDT</h3>
                                <p className="header">Senior Partner</p>
                                <p>David is one of Pennsylvania’s top political operatives. His experience inside and outside of the government gives him a genuine appreciation for the issues facing elected officials. As an attorney with countless campaigns under his belt, David understands the hard work and determination needed to achieve success.</p>
                                <p>David began his professional career as an attorney in the Dauphin County Solicitor’s Office before joining the firm in 2010. Since then, his innovative energy and meticulous attention to detail has been instrumental in a variety of efforts, ranging from grassroots advocacy and policy initiatives to fundraising for federal, state and local political candidates.</p>
                                <p>In 2012, David served as director of ballot access for presidential candidate Mitt Romney in Pennsylvania and Field Director for Mitt Romney in Pennsylvania for the General Election campaign. David coordinated a statewide petition process, helping Governor Romney file over 8,000 petition signatures, far exceeding any of the other Republican presidential candidates. During the General Election campaign, David served as the primary point of contact for all of Pennsylvania’s 67 Republican County Parties and local political leaders at all levels.</p>
                                <p>David has served as the Chairman of the Dauphin County Republican Committee since June of 2016.</p>
                                <p>A native of northern Dauphin County, David now resides in Hershey with his wife, Amy.</p>
                                <div><a href="mailto:dfeidt@midatlanticss.com"><Icon basestyle={{position: 'relative', top: '2px', marginRight: '7px'}} iconid="mail" size="15px" color="black"></Icon>dfeidt@midatlanticss.com</a></div>
                            </div>
                        </div>
                        <div id="Hubiak">
                            <div className="left-3" style={{position: 'relative'}}>
                                <script type="application/ld+json">
                                    {metaC}
                                </script>
                                <div className="headshot Alicia"></div>
                                <h3>Alicia Hubiak</h3>
                                <p className="header">Grassroots & Political Associate</p>
                                <p>Alicia, a native of Schuylkill County, joined the firm in December of 2016. She has a reputation as being one of the most dedicated and conscientious young political operatives in Pennsylvania. Spending the majority of her career working on political campaigns, Alicia knows the hard work that is necessary to secure a victory and she never backs down from a fight.</p>
                                <p>Fresh out of college, Alicia went to work right away on the Romney campaign, running the field office in one of Pennsylvania’s largest counties. Following the campaign, she took a position with the Pennsylvania Senate Republican Campaign Committee and was deployed into the field in 2014 to help deliver one of the most contested State Senate races of the cycle.</p>
                                <p>Following her time on the campaign trail, Alicia served as a legislative assistant to State Senator Camera Bartolotta in her Harrisburg Office.</p>
                                <p>In 2016, Alicia was recognized by City & State PA as one of PA’s “40 Under 40 Rising Stars”.</p>
                                <div><a href="mailto:ahubiak@midatlanticss.com"><Icon basestyle={{position: 'relative', top: '2px', marginRight: '7px'}} iconid="mail" size="15px" color="black"></Icon>ahubiak@midatlanticss.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <WhatWeDo/>
            </article>
        )
    }

}
