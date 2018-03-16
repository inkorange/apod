import React from 'react'
import { Link } from 'react-router-dom'

export class VerticalPanel extends React.Component {

    static defaultProps = {
        title: null,
        content: null,
        icon: '',
        id: ''
    };

    constructor(props) {
        super(props);
        this.state = {
        };
        this.jumpToPage = this.jumpToPage.bind(this);
    }

    jumpToPage() {
        history.pushState("", "", "/" + this.props.id);
    }

    render() {
        return (
            <Link className={"VerticalPanel " + this.props.id} to={'/' + this.props.id}>
                <img src={"/images/"+this.props.icon+".svg"} />
                <header>{this.props.title}</header>
                <div>
                    <p>{this.props.content}</p>
                    <span>Learn More</span>
                </div>
            </Link>
        )
    }
}


