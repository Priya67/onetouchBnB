import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotMap from '../SpotMap/spot_map';
import { Link } from 'react-router-dom';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="splash-inline">
          <div id="mapdiv">
            <div class = "main_map">
              <SpotMap
                spots={this.props.spots}
                updateFilter={this.props.updateFilter}
                singleSpot={false}
                fetchSpots={this.props.fetchSpots}
                />
            </div>
          </div>
          <ul id="index-ul">
            {
              this.props.spots.map(spot => (
                <SpotIndexItem
                  spot={spot}
                  key={spot.id}
                  />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default SpotIndex;
