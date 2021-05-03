import React from 'react';
import Avatar from 'react-avatar';
import StarRatings from 'react-star-ratings';

function reviewItem({review}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Avatar name={review.name} round="50%" size="50" />
              <span>{review.name}</span>
              <StarRatings 
                rating={review.rate} 
                starRatedColor="rgb(202, 153, 9)" 
                numberOfStars={5} name="rating" 
                starDimension="20" 
                starSpacing="2px"
              />
            </div>
          </div>
          <div className="col-12">{ review.detail }</div>
        </div>
      </div>

      <style jsx>{``}</style>
    </div>
  );
}

export default reviewItem;
