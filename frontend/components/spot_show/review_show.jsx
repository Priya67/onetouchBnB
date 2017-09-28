import React from 'react';

const Review = ({rating, body}) => (
  <div>
    <ul>
      <li><u>Rating</u>: {rating}</li>
      <li><u>Comment</u>: {body}</li>
    </ul>
  </div>
);

export default Review;
