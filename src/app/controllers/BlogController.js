"use strict";

import React from 'react'
const Store =  require('../models/Store');
import { autobind } from 'core-decorators';

@autobind
export default class BlogController extends React.Component {

    static defaultProps = {
        api: "AIzaSyDXRNMZQq6mrYScgpq3fx-qPyj4kysnfn8"
    };

    constructor(props) {
        super(props);
        this.state= {
            blogEntries: []
        }
    }

    componentDidMount() {
        $.ajax({
            type: "GET",
            url: "https://www.googleapis.com/blogger/v3/blogs/734751733171380608/posts?key=" + this.props.api,
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        })
            .done(this.successAPI)
            .fail(this.failedAPI);
    }

    componentWillUnmount() {

    }

    successAPI(data) {
        console.log('success: ', data);
    }

    failedAPI(e) {
        console.log('failure: ', e);
    }

    setStyles() {

    }

    render() {
        return (
            <article className="blog">
                <div className="container">
                    {this.state.blogEntries}
                </div>
            </article>
        )
    }

}
