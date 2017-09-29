import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotMap from '../SpotMap/spot_map';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
      <div>
        <h3><u>Homes</u></h3>
        <div id="splash-inline">
          <ul>
            {
              this.props.spots.map(spot => (
                <SpotIndexItem
                  spot={spot}
                  key={spot.id}
                  />
              ))
            }
          </ul>
          <div id="mapdiv">
            <SpotMap
              spots={this.props.spots}
              updateFilter={this.props.updateFilter}
              singleSpot={false}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default SpotIndex;
