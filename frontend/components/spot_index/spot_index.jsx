import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = (props) => (
  <div>
    <h1>Homes</h1>
    <ul>
      {
        props.spots.map(spot => (
          <SpotIndexItem
            spot={spot}
            key={spot.id}
            fetchSpots={props.fetchSpots}
          />
        ))
      }
    </ul>
  </div>
);

export default SpotIndex;
