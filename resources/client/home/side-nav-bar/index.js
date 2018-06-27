import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import svgInjector from 'client/utils/svg-injector';

import './styles/index.scss';

// withRouter(SideNavBar);

// withRouter(props => <SideNavBar {...props}/>);

class SideNavBar extends Component {
    componentDidMount() {
        svgInjector('.iconic-sprite');
    }

    render() {
        return (
            <div className="col-sm-3">
                <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical">
                    <NavLink className="nav-link" activeClassName="active" to="/home/profile">
                        Profile
                    </NavLink>
                    {/* <NavLink className="nav-link" activeClassName="active" to="/home/b">
                    The B Link
                </NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/home/c">
                    And the See link
                </NavLink> */}
                    <div className="dropdown-divider" />
                    <div styleName="reviews">
                        <h5 className="pt-3 pb-1">Your Reviews</h5>
                        {/* <a href="#">New York City</a>
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
                    </ul> */}
                        <p>No reviews yet, add your first one.</p>
                        <Link
                            onClick={() => {
                                if (this.props.location.pathname === '/home/add-review') {
                                }
                            }}
                            to="/home/add-review"
                            href="/home/add-review">
                            <button type="button" className="btn btn-info">
                                Add a review
                                <img
                                    src="/icons/sprite.svg"
                                    className="iconic-sprite"
                                    style={{ display: 'none' }}
                                />
                                <svg viewBox="0 0 8 8" className="icon" styleName="icon">
                                    <use xlinkHref="#plus" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

SideNavBar.propTypes = {};

export default withRouter(SideNavBar);
