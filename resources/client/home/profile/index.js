import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">Profile</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="profilePhotoUpload">
                                    ProfilePhoto
                                </label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Upload</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="profilePhotoUpload" />
                                        <label class="custom-file-label" for="profilePhotoUpload">Choose file</label>
                                    </div>
                                </div>
                            </div>



                            <div className="form-group">
                                <label htmlFor="inputName">Username</label>
                                <input type="text" className="form-control" id="name" />
                                <small id="nameHelpBlock" className="form-text text-muted">
                                    This is the name that will be displayed on your reviews.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutTextArea">
                                    About me
                                </label>
                                <textarea
                                    className="form-control"
                                    id="aboutTextArea"
                                    rows="3"
                                />
                                <small id="aboutHelpBlock" className="form-text text-muted">
                                    Don't be shy, 3-5 sentences about you. Your interests and expertise.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="instagramUpload">
                                    Instagram
                                </label>
                                <br/>
                                <button type="button" className="btn btn-outline-primary">Connect Instagram</button>
                                <small id="aboutHelpBlock" className="form-text">
                                    <p class="text-danger">Connect your instagram so people can see who you are!</p>
                                </small>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
