import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Header from 'components/header';
import SideNavBar from './side-nav-bar';
import Profile from './profile';
// console.log(window.DATA_BS);
if (module.hot) {
    module.hot.accept();
}
const App = () => (
    <div>
        <Header />
        <div className="container pt-5">
            <Router>
                <div className="row">
                    <SideNavBar/>
                    <Switch>
                        <Route exact path="/home/profile" component={Profile} />
                        <Route exact path="/home/account" component={Profile} />
                        <Route path="/home/:page" component={Name} />
                        <Redirect to="/home/profile" />
                    </Switch>
                </div>
            </Router>
        </div>
    </div>
);

const Name = ({ match }) => (
    <div className="col-sm-9">
        <p>{match.params.page}</p>
    </div>
);

// App.propTypes = {};
ReactDOM.render(<App />, document.getElementById('root'));
