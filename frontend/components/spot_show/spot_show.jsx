import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import SpotDetail from './spot_detail';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const SpotShow = ({ spot, user, spotId, fetchSpot, fetchUser }) => {
  // console.log("spot show ", spotId);
  return (
    <div>
        <Link to="/"><h3  className="single_spot_show">Back to homes</h3></Link>
        <br />
        <div className="spot-show">
          <SpotDetail spot={spot}
            user={user}
            spotId={spotId}
            fetchSpot={fetchSpot}
            fetchUser={fetchUser} />
            <ReviewLink
            component={ReviewFormContainer}
            to={`/spots/${spotId}/review`}
            label="Leave a Review"
          />
          <ProtectedRoute
            path="/spots/:spotId/review"
            component={ReviewFormContainer}
          />
        </div>
    </div>
  );
};

export default SpotShow;
