import React from 'react';
import { Link } from 'react-router-dom';

import SpotDetail from './spot_detail';

const SpotShow = ({ spot, spotId, fetchSpot, fetchUser }) => {

  return (
    <div>
        <Link to="/"><h3  className="single_spot_show">Back to homes</h3></Link>
        <br />
        <div className="spot-show">
          <SpotDetail spot={spot}
            fetchUser={fetchUser} />
        </div>
    </div>
  );
};

export default SpotShow;
