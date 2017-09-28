import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import SpotDetail from './spot_detail';
import SpotMap from '../SpotMap/spot_map';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const SpotShow = ({ spot, user, spotId, fetchSpot, fetchUser }) => {
  const spots = {
    [spotId]: spot
  };

  return (
    <div className="single_spot_show">
        <Link to="/"><h3>Back to homes</h3></Link>
        <br />
        <div className="spot-show">
          <SpotDetail spot={spot}
            user={user}
            spotId={spotId}
            fetchSpot={fetchSpot}
            fetchUser={fetchUser}
          />
        < br/>

      <Link to={`/spots/${spotId}/review`}
          >Write Review</Link>
        <br />

        <SpotMap
          spots={spots}
          spotId={spotId}
          singleSpot={true}
          fetchSpot={fetchSpot}
        />
        </div>
    </div>
  );
};

export default SpotShow;
