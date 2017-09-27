import React from 'react';
import { Link } from 'react-router-dom';

import ReviewFormContainer from './review_form_container';
import SpotDetail from './spot_detail';
import SpotMap from '../SpotMap/spot_map';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const SpotShow = ({ spot, user, spotId, fetchSpot, fetchUser }) => {
  console.log("dfjnsdjkfn", spot.reviews);
  const spots = {
    [spotId]: spot
  };

  return (
    <div>
        <Link to="/"><h3  className="single_spot_show">Back to homes</h3></Link>
        <br />
        <div className="spot-show">
          <SpotDetail spot={spot}
            user={user}
            spotId={spotId}
            fetchSpot={fetchSpot}
            fetchUser={fetchUser}
          />

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
