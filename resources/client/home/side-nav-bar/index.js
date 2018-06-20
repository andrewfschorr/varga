import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideNavBar = props => (
    <div className="col-sm-3">
        <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical">
            <NavLink className="nav-link" activeClassName="active" to="/home/profile">
                Link to A
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/home/b">
                The B Link
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/home/c">
                And the See link
            </NavLink>
        </div>
    </div>
);

SideNavBar.propTypes = {};

export default SideNavBar;
