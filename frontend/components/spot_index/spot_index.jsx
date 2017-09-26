import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = (props) => (
  <div>
    <h1 id="slogan">House Rental Center</h1>
    <h1><u>Homes</u></h1>
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
