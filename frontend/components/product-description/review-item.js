import React from 'react';
import Avatar from 'react-avatar';
import StarRatings from 'react-star-ratings';

function reviewItem({}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Avatar name="Foo Bar" round="50%" size="50" />
              <span>Name Lastname</span>
              <StarRatings 
                rating={5} 
                starRatedColor="rgb(202, 153, 9)" 
                numberOfStars={5} name="rating" 
                starDimension="20" 
                starSpacing="2px"
              />
            </div>
          </div>
          <div className="col-12">This is some text within a card body.</div>
        </div>
      </div>

      <style jsx>{``}</style>
    </div>
  );
}

export default reviewItem;
