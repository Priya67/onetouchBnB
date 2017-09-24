import React from 'react';
import { Link } from 'react-router-dom';

import SpotDetail from './spot_detail';

const SpotShow = ({ spot, spotId, fetchSpot }) => {
  const spots = {
    [spotId]: spot
  };

  return (
    <div className="single_spot_show">
      <Link to="/">Back</Link>
      <div>
        <SpotDetail spot={spot} />
      </div>
    </div>
  );
};

export default SpotShow;
