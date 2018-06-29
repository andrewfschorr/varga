import React, { Component } from 'react';
// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

import './styles/index.scss';

const requiredFields = ['name', 'location', 'review', 'rating'];

class AddReview extends Component {
    constructor(props) {
        super(props);
        this.addReview = this.addReview.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeReview = this.changeReview.bind(this);
        this.changeRating = this.changeRating.bind(this);
        // this.generateErrors = this.generateErrors.bind(this);
    }

    state = {
        name: null,
        location: 'new york',
        review: null,
        rating: null,
        errors: [],
    };

    addReview(e) {
        e.preventDefault();
        const data = {};
        const errors = [];
        for (let i = 0; i < requiredFields.length; i++) {
            const field = requiredFields[i];
            if (!this.state[field]) {
                errors.push(field);
            } else {
                data[field] = this.state[field];
            }
        }
        if (errors.length) {
            this.setState({ errors });
        } else {
            fetch('/review/add', {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'same-origin',
                headers: {
                    'X-CSRF-TOKEN': window.DATA_BS['X-CSRF-TOKEN'],
                    'Content-Type': 'application/json',
                },
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                });
        }
    }

    changeLocation(e) {
        this.setState({ city: e.target.value });
    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }

    changeReview(e) {
        this.setState({ review: e.target.value });
    }

    changeRating(rating) {
        this.setState({ rating });
    }

    generateErrors() {
        <div className="alert alert-danger" role="alert">
            {this.errors.map(errorField => (
                <span>
                    <strong>Uh oh... </strong>`there was a problem with the ${errorField} field`
                </span>
            ))};
        </div>;
    }

    render() {
        return (
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">Add Review</div>
                    <div className="card-body">
                        {this.state.errors.length ? (
                            <div className="alert alert-danger" role="alert">
                                {/* {this.state.errors.map(errorField => (
                                    <span></span>
                                ))} */}
                                <strong>Uh noe... </strong> There were some with the following {this.state.errors.length === 1 ? 'field' : 'fields'} {this.state.errors.join(', ')}
                            </div>
                        ) : null}
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPlaceName">Place Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPlaceName"
                                        placeholder="eg: Palace of Versailles"
                                        onChange={this.changeName}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputLocation">City</label>
                                    <select
                                        id="inputLocation"
                                        className="form-control"
                                        value={this.state.location}
                                        onChange={this.changeLocation}>
                                        <option value="new york">New York</option>
                                        <option value="barcelona">Barcelona</option>
                                        <option value="paris">Paris</option>
                                        <option value="seoul">Seoul</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutTextArea">Your review</label>
                                <textarea
                                    className="form-control"
                                    id="aboutTextArea"
                                    rows="3"
                                    value={this.review}
                                    onChange={this.changeReview}
                                />
                                <small id="aboutHelpBlock" className="form-text text-muted">
                                    What did you think? Why should travellers check this place out?
                                </small>
                            </div>
                            <div className="form-group">
                                <p className="mb-0">Rating</p>
                                <ReactStars
                                    count={5}
                                    value={this.state.rating}
                                    onChange={this.changeRating}
                                    size={56}
                                    color2="#ffd700"
                                />
                            </div>
                            <div className="d-flex">
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-auto"
                                    onClick={this.addReview}>
                                    Add
                                </button>

                                <button type="submit" className="btn btn-danger">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddReview;
