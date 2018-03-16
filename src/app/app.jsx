import React from 'react';
import { render } from 'react-dom';
require('es6-object-assign').polyfill();
const Global = require('./models/Global');
// layouts
import {MainLayout} from './layouts/MainLayout';

render((
    <div className={(Global.isIE ? ' isIE ' : '') + (Global.isFF ? ' isFF ' : '')}>
        <MainLayout />
    </div>
),  document.getElementById('app'));
