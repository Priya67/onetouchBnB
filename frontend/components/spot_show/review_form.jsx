import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSpotShow = this.navigateToSpotShow.bind(this);
  }

  navigateToSpotShow() {
    const url = `/spots/${this.props.match.params.spotId}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const review = Object.assign({}, this.state, {
      spot_id: spotId,
      author_id: this.props.currentUser.id
    });
    this.props.createReview({review});
    this.navigateToSpotShow();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <h1>Write a Review</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Rating: </label>
          <br/>
          <input
            type="text"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>
          <br/>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <br/>
          <input type="submit" id="submit-button-on-review" />
        </form>
          <br />
        <button id="review-button" onClick={this.navigateToSpotShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
