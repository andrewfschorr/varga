import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from 'components/header';
import SideNavBar from './side-nav-bar';
import Profile from './profile';
import Account from './account';

if (module.hot) {
    module.hot.accept();
}
const App = () => (
    <Router>
        <div>
            <Header />
            <div className="container pt-5 pb-5">
                <div className="row">
                    <SideNavBar />
                    <Route exact path="/home/profile" component={Profile} />
                    <Route exact path="/home/account" component={Account} />
                </div>
            </div>
        </div>
    </Router>
);

const Name = ({ match }) => (
    <div className="col-sm-9">
        <p>{match.params.page}</p>
    </div>
);

// App.propTypes = {};
ReactDOM.render(<App />, document.getElementById('root'));
