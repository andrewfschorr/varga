import React, { Component } from 'react';
import axois from 'axios';

import './styles/index.scss';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.changeAvi = this.changeAvi.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changeAbout = this.changeAbout.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
    }

    state = {
        avi: DATA_BS.user.avi,
        username: DATA_BS.user.username,
        about: DATA_BS.user.about || '',
    };

    changeAbout(e) {
        this.setState({ about: e.target.value });
    }

    changeUsername(e) {
        this.setState({ username: e.target.value });
    }

    changeAvi(e) {
        const file = e.target.files[0];
        const validTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (e.target.files && validTypes.includes(file.type)) {
            const reader = new FileReader();
            const readerP = new Promise((resolve, reject) => {
                reader.onloadend = resolve;
            });
            reader.readAsDataURL(file);
            readerP.then(() => {
                this.setState({ avi: reader.result, newAviFile: file });
            });
        }
    }

    saveProfile(e) {
        e.preventDefault();
        console.log(this.state);
        const { username, about } = this.state;
        const data = { username, about };
        if (this.state.newAviFile) {
            data.newAviFile = this.state.newAviFile;
        }
        const formData = new FormData();
        for (const [key, val] of Object.entries(data)) {
            console.log(key, val);
            formData.append(key, val);
        }
        fetch('/profile/update', {
            method: 'POST',
            body: formData,
            credentials: 'same-origin',
            headers: {
                'X-CSRF-TOKEN': window.DATA_BS['X-CSRF-TOKEN'],
                // 'content-type': 'application/x-www-form-urlencoded',
            },
        });
    }

    render() {
        return (
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">Profile</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="profilePhotoUpload">Profile Photo</label>
                                <div styleName="avi-holder">
                                    <img src={this.state.avi} alt="your avatar" />
                                </div>
                                <div className="input-group">
                                    <label className="input-group-btn">
                                        <span className="btn btn-primary mt-3">
                                            Choose New Avatar{' '}
                                            <input
                                                onChange={this.changeAvi}
                                                type="file"
                                                id="avi"
                                                name="avi"
                                                style={{ display: 'none' }}
                                            />
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputName">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={this.state.username}
                                    onChange={this.changeUsername}
                                />
                                <small id="nameHelpBlock" className="form-text text-muted">
                                    This is the name that will be displayed on your reviews.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutTextArea">About me</label>
                                <textarea
                                    className="form-control"
                                    id="aboutTextArea"
                                    rows="3"
                                    onChange={this.changeAbout}
                                    value={this.state.about}
                                />
                                <small id="aboutHelpBlock" className="form-text text-muted">
                                    Don't be shy, 3-5 sentences about you. Your interests and
                                    expertise.
                                </small>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="instagramUpload">Instagram</label>
                                <br />
                                <button type="button" className="btn btn-outline-primary">
                                    Connect Instagram
                                </button>
                                <small id="aboutHelpBlock" className="form-text">
                                    <p className="text-danger">
                                        Connect your instagram so people can see who you are!
                                    </p>
                                </small>
                            </div> */}
                            <div className="d-flex">
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-auto"
                                    onClick={this.saveProfile}>
                                    Save
                                </button>
                                <button className="btn btn-danger">cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
