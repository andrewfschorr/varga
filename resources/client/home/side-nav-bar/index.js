import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/index.scss';

// import PropTypes from 'prop-types';

const SideNavBar = props => (
    <div className="col-sm-3">
        <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical">
            <NavLink className="nav-link" activeClassName="active" to="/home/profile">
                Profile
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/home/b">
                The B Link
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/home/c">
                And the See link
            </NavLink>
            <div className="dropdown-divider"></div>
            <div styleName="reviews">
                <h5 className="pt-3 pb-1">Your Reviews</h5>
                <a href="#">New York City</a>
                <ul className="list-group list-group-flush pb-3">
                    <li className="list-group-item"><a href="#">Cras justo odio Cras justo odio Cras justo odio Cras justo odio</a></li>
                    <li className="list-group-item"><a href="#">Porta ac consectetur ac</a></li>
                    <li className="list-group-item"><a href="#">Vestibulum at eros</a></li>
                </ul>
                <a href="#">Iowa</a>
                <ul className="list-group list-group-flush pb-3">
                    <li className="list-group-item"><a href="#">Cras justo odio</a></li>
                    <li className="list-group-item"><a href="#">Porta ac consectetur ac</a></li>
                    <li className="list-group-item"><a href="#">Vestibulum at eros</a></li>
                </ul>
            </div>
        </div>
    </div>
);

SideNavBar.propTypes = {};

export default SideNavBar;
