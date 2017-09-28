import React from 'react';

const Review = ({rating, body}) => (
  <div id="single-review">
    <ul>
      <li><u>Rating</u>: {rating}</li>
      <br />
      <li><u>Comment</u>: {body}</li>
    </ul>
  </div>
);

export default Review;
