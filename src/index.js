import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appmain from './Appmain';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { TeamProvider } from './Component/Context';
ReactDOM.render(
    <TeamProvider>
        <Router>
            <Appmain />
        </Router>
    </TeamProvider>
    ,

    document.getElementById('root'),
);
registerServiceWorker();
