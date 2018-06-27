import React, { Component } from 'react';
// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

import './styles/index.scss';

class AddReview extends Component {
    render() {
        return (
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">Add Review</div>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPlaceName">Place Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPlaceName"
                                        placeholder="eg: Palace of Versailles"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <select id="inputCity" className="form-control">
                                        <option defaultValue>Choose...</option>
                                        <option>New York</option>
                                        <option>Barcelona</option>
                                        <option>Paris</option>
                                        <option>Seoul</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutTextArea">Your review</label>
                                <textarea className="form-control" id="aboutTextArea" rows="3" />
                                <small id="aboutHelpBlock" className="form-text text-muted">
                                    What did you think? Why should travellers check this place out?
                                </small>
                            </div>
                            <div className="form-group">
                                <p className="mb-0">Rating</p>
                                <ReactStars
                                    count={5}
                                    onChange={(newRating) => {
                                        // console.log(newRating);
                                    }}
                                    size={56}
                                    color2="#ffd700"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Add
                            </button>

                            <button type="submit" className="btn btn-danger ml-2">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddReview;
