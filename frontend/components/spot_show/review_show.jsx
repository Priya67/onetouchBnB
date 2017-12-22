import React from 'react';

const Review = ({rating, body, author}) => (
  <div id="single-review">
    <ul>
      <li id="author_rating">
        <span id="author">
          <img src={author.img_url ? author.img_url : "https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506118306/user_aiufn8.png"}/>
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
  r.push(<span class="fa fa-star checked"></span>);
  }
  for(let j = 0; j<5-length;j++) {
    r.push(<span class="fa fa-star unchecked"></span>);
  }
  return r;
}

export default Review;
