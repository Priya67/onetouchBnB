import React from 'react';

const Review = ({rating, body, author}) => (
  <div id="single-review">
    <ul>
      <li id="author_rating">
        <span id="author">
          <img src={author.img_url}/>
          <p>{author.username}</p>
        </span>
        <span><u>Rating</u>: {ratingDisplay(rating)}</span>
      </li>
      <li><u>Comment</u>: {body}</li>
    </ul>
  </div>
);

function ratingDisplay(length) {
  let r = [];
  for(let i = 0; i<length; i++) {
    r.push(<b key={i}>{String.fromCharCode(9733)}</b>);
  }
  for(let j = 0; j<5-length;j++) {
    r.push(<b key={5-j}>{String.fromCharCode(9734)}</b>);
  }
  return r;
}

export default Review;
