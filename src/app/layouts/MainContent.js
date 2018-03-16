import React from "react";
const Global = require('../models/Global');

export class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isloading: true
        };
    }

    render() {
        return (
            <section className={this.props.path + " MainContent " + (this.state.isloading ? "loading" : "") + " " + (Global.isIE ? "isIE" : "") + " " + (Global.isMobile ? "isMobile" : "") + " " + (Global.isMobileSafari ? "isMobileSafari" : "")}>
        		{this.props.children}
	        </section>
	    )
    }
}