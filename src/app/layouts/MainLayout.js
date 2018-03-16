import React from 'react'
import { autobind } from 'core-decorators';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// models
const Global = require('../models/Global');

// elements
import {MainContent}        from './MainContent'

export class MainLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Router>
                <MainContent path={window.location.pathname}>
                    APOD
                    <Route path="/:id" component={() => { return <div>You put in a date</div>; } } />
                </MainContent>
            </Router>
        )
    }
}