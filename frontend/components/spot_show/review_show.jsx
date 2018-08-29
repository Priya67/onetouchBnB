import React from 'react';

const Review = ({rating, body, author}) => (
  <div id="single-review">
    <ul>
      <li id="author_rating">
        <span id="author">
          <img src={author.img_url ? author.img_url : "https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506118306/user_aiufn8.png"}/>
          <p>{author.username}</p>
        </span>
        <span id="comment">{body}</span>
        <span id="rating">{ratingDisplay(rating)}</span>
      </li>
    </ul>
  </div>
);

function ratingDisplay(length) {
  let r = [];
  for(let i = 0; i<length; i++) {
  r.push(<span
    className="fa fa-star checked"
    key={i + new Date().getUTCMilliseconds() + Math.random() * 500}
  />);
  }
  for(let j = 0; j<5-length;j++) {
    r.push(<span
      className="fa fa-star unchecked"
      key={j + new Date().getUTCMilliseconds() + Math.random() * (500-1) + 1}
    />);
  }
  return r;
}

export default Review;
