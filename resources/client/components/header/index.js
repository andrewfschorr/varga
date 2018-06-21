import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">lo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {DATA_BS.user.name}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <RouterNavLink
                                        className="dropdown-item"
                                        activeClassName="active"
                                        to="/home/account">
                                        Account Settings
                                    </RouterNavLink>

                                    <DropdownItem divider />
                                    <DropdownItem
                                        tag="a"
                                        onClick={e => {
                                            e.preventDefault();
                                            document.getElementById('logout-form').submit();
                                        }}>
                                        Logout
                                    </DropdownItem>
                                    <form
                                        id="logout-form"
                                        action="/logout"
                                        method="POST"
                                        style={{ display: 'none' }}>
                                        <input
                                            type="hidden"
                                            name="_token"
                                            value={DATA_BS.csrfToken}
                                        />
                                    </form>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
