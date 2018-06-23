import React, { Component } from 'react';

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', response => {
        console.log(`Successful login for: ${response.name}`);
        document.getElementById('status').innerHTML = `Thanks for logging in, ${response.name}!`;
    });
}

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
    }
}

function checkLoginState() {
    FB.getLoginStatus(response => {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '160693578124765',
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.8', // use graph api version 2.8
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.
    console.log('hi');
    FB.getLoginStatus(response => {
        statusChangeCallback(response);
    });
};

class Profile extends Component {
    componentDidMount() {
        (function(d, s, id) {
            let js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src =
                '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=160693578124765';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    render() {
        return (
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">Profile</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="profilePhotoUpload">ProfilePhoto</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="profilePhotoUpload"
                                        />
                                        <label
                                            className="custom-file-label"
                                            htmlFor="profilePhotoUpload">
                                            Choose file
                                        </label>
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
                                <label htmlFor="aboutTextArea">About me</label>
                                <textarea className="form-control" id="aboutTextArea" rows="3" />
                                <small id="aboutHelpBlock" className="form-text text-muted">
                                    Don't be shy, 3-5 sentences about you. Your interests and
                                    expertise.
                                </small>
                            </div>
                            <div className="form-group">
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
                            </div>
                            <div className="form-group">
                                <label htmlFor="instagramUpload">Facebook Profile</label>
                                <br />
                                <div className="form-group">
                                    <div
                                        className="fb-login-button"
                                        data-size="medium"

                                    />
                                    <div id="status" />
                                </div>
                            </div>

                            <br />
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={(e) => {
                                    e.preventDefault();
                                    FB.logout();
                                }}>
                                Logout of Facebook
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
