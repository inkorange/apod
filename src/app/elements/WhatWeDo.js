import React from 'react'
import {VerticalPanel}   from './VerticalPanel'
export class WhatWeDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let PanelDOM = [];
        panelContent.map((content, i) => {
           PanelDOM.push(<VerticalPanel key={i} title={content.title} content={content.content} id={content.id} icon={content.icon}/>);
        });
        return (
            <div id="what_we_do" className="container what_we_do">
                <div className="content">
                    <div className="width-5">
                        <h3 key="h1">What We Do</h3>
                        <p key="p1">MASS understands that every client and every issue is different. Through our group of experienced professionals, we will adapt and adjust to meet the needs of our clients. Our team utilizes their skills and backgrounds to offer our clients a path to navigating the complexities of local, state and federal government. We truly understand the different needs of each of our clients, especially amid the ever-changing political climate.</p>
                        <p key="p2">MASS prides itself on getting results for our clients, through detailed government affairs and political advocacy strategies. Our services include:</p>
                    </div>
                    <div className="panel_container">
                        {PanelDOM}
                    </div>
                </div>
            </div>
        )
    }
}

const panelContent = [
    {
        title: 'Government Affairs',
        content: 'Through our extensive experience and network of relationships, MASS can help clients customize a government affairs strategy that will meet their business needs.',
        icon: 'govtaffairs',
        id: 'GovernmentAffairs'
    },
    {
        title: 'Political Consulting',
        content: 'MASS understands the role politics plays in business development and corporate success.',
        icon: 'political',
        id: 'PoliticalConsulting'
    },
    {
        title: 'Grassroots Advocacy',
        content: 'Engaging key stakeholders and the public is vital in gaining positive results for your business. MASS has the experience to develop a quality and driven grassroots advocacy strategy.',
        icon: 'grassroots',
        id: 'GrassrootsAdvocacy'
    },
    {
        title: 'Issue Development',
        content: 'Oftentimes, the most effective way to achieve results is to make sure the decision-makers and key stakeholders are hearing your story.',
        icon: 'issuedev',
        id: 'IssueDevelopment'
    },
    {
        title: 'Network Development',
        content: 'In the political arena, relationships matter. MASS prides itself on building a network of stakeholders and decision-makers for our clients.',
        icon: 'networking',
        id: 'NetworkDevelopment'
    },
    {
        title: 'Public Affairs',
        content: 'An effective message is the linchpin to a successful strategy. MASS will work with you to develop a message that will support your issue or campaign.',
        icon: 'publicaffairs',
        id: 'PublicAffairs'
    },
];




