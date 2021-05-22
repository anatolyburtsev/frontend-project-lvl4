import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import NoMatchPage from './NoMatchPage.js';

const App = () => {
    console.log("App started");
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route component={NoMatchPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
