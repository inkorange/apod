import React from 'react'
import { Link } from 'react-router-dom'
const Store =  require('../models/Store');
import { Icon } from './Icon';

export class MassHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            downClass: "",
            open: false
        };
        this.swapStyle = this.swapStyle.bind(this);
        this.triggerMenu = this.triggerMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        Store.subscribe('downwards', this.swapStyle);
    }

    componentWillUnmount() {
        Store.unSubscribe('downwards', this.swapStyle);
    }

    swapStyle(val) {
        this.setState({
            downClass: val ? "offtop" : ""
        })
    }

    triggerMenu() {
        this.setState({
            open: !this.state.open
        });
    }

    closeMenu() {
        this.setState({
            open: false
        });

    }
    render() {
        let MenuDOM = (
            <ul className={(this.state.open ? "open" : "closed")}>
                <li><Link to="/WhoWeAre#who_we_are" onClick={this.closeMenu}>WHO WE ARE</Link></li>
                <li><Link to="/WhatWeDo#what_we_do" onClick={this.closeMenu}>WHAT WE DO</Link></li>
                <li><Link to="/HowWeOperate#how_we_operate" onClick={this.closeMenu}>HOW WE OPERATE</Link></li>
                <li><Link to='/Team' onClick={this.closeMenu}>OUR TEAM</Link></li>
                <li><a href="#contact" onClick={this.closeMenu}>CONTACT</a></li>
            </ul>
        );
//<p style={{position: 'absolute', color: 'white', marginLeft: '200px'}}>{document.documentElement.scrollTop} | {top} | {top/-2}</p>
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        return (
            <header className={"AppHeader " + this.state.downClass + " " + (this.state.open ? "open" : "closed")}>
                <section>
                    <div className="content">
                        <div className="logo">
                            <Link to='/home' onClick={this.closeMenu}><img src="/images/MASS_Logo.svg" /></Link>
                        </div>
                        <div className="social">
                            <a href="https://twitter.com/MidAtlanticSS"><Icon iconid="twitter" color="#BFBFBF" /></a>
                            <a href="https://www.linkedin.com/company/midatlanticss/"><Icon iconid="linkedin" color="#BFBFBF" /></a>
                            <a href="https://www.facebook.com/midatlanticss/"><Icon iconid="facebook" color="#BFBFBF" /></a>
                            <a href="https://www.instagram.com/midatlanticss/"><Icon iconid="instagram" color="#BFBFBF" /></a>
                        </div>
                        <div onClick={this.triggerMenu} className={"Menu " + (this.state.open ? "open" : "closed")}>
                            <img src="/images/menu.svg" data-name="menu" className={"menu_icon "}/>
                            <img src="/images/close.svg" data-name="close" className={"close_icon "}/>
                        </div>
                        {MenuDOM}
                    </div>
                </section>
            </header>
        )
    }
}


