import HomepageController from '../controllers/HomepageController';
import GovernmentAffairs from '../controllers/GovernmentAffairs';
import PoliticalConsulting from '../controllers/PoliticalConsulting';
import IssueDevelopment from '../controllers/IssueDevelopment';
import GrassrootsAdvocacy from '../controllers/GrassrootsAdvocacy';
import NetworkDevelopment from '../controllers/NetworkDevelopment';
import PublicAffairs from '../controllers/PublicAffairs';
import BlogController from '../controllers/BlogController'

import OurTeam from '../controllers/OurTeam';

export default [
    {
        path: '/home',
        component: HomepageController,
        exact: true,
        title: 'Mid-Atlantic Strategic Solutions, Delivering Effective Results.'
    },
    {
        path: '/WhoWeAre',
        component: HomepageController,
        exact: true,
        title: 'Mid-Atlantic Strategic Solutions | Who We Are'
    },
    {
        path: '/WhatWeDo',
        component: HomepageController,
        exact: true,
        title: 'Mid-Atlantic Strategic Solutions | What We Do'
    },
    {
        path: '/HowWeOperate',
        component: HomepageController,
        exact: true,
        title: 'Mid-Atlantic Strategic Solutions | How We Operate'
    },
    {
        path: '/GovernmentAffairs',
        component: GovernmentAffairs,
        exact: false,
        title: 'Government Affairs | Mid-Atlantic Strategic Solutions'
    },
    {
        path: '/PoliticalConsulting',
        component: PoliticalConsulting,
        exact: false,
        title: 'Political Consulting | Mid-Atlantic Strategic Solutions'
    },
    {
        path: '/IssueDevelopment',
        component: IssueDevelopment,
        exact: false,
        title: 'Issue Development | Mid-Atlantic Strategic Solutions'
    },
    {
        path: '/GrassrootsAdvocacy',
        component: GrassrootsAdvocacy,
        exact: false,
        title: 'Grassroots Advocacy | Mid-Atlantic Strategic Solutions'
    },
    {
        path: '/NetworkDevelopment',
        component: NetworkDevelopment,
        exact: false,
        title: 'Network Development | Mid-Atlantic Strategic Solutions'
    },
    {
        path: '/PublicAffairs',
        component: PublicAffairs,
        exact: false,
        title: 'Public Affairs | Mid-Atlantic Strategic Solutions'
    },
    {
        path: '/Team',
        component: OurTeam,
        exact: false,
        title: 'Mid-Atlantic Strategic Solutions | Team'
    },
    {
        path: '/Blog',
        component: BlogController,
        exact: true,
        title: 'Blog | Mid-Atlantic Strategic Solutions'
    },
]
