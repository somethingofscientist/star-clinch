import React, { useState } from 'react';

function PostReviewStarRating(props) {
  const [rating, setRating] = useState(props.rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i className="fas fa-star" key={i} onClick={() => setRating(i)}></i>);
    } else {
      stars.push(<i className="far fa-star" key={i} onClick={() => setRating(i)}></i>);
    }
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
}

export default PostReviewStarRating;
