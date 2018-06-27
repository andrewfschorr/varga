import React, { Component } from 'react';

class Account extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">Account Settings</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Change Email
                            </button>
                        </form>
                        <hr/>
                        <form>
                            <div className="form-group">
                                <label htmlFor="oldPassword">Old Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="oldPassword"
                                    placeholder="Old Password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword1">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword1"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword2">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword2"
                                    placeholder="Confirm New Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
