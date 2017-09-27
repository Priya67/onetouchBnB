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
        <h1 id="slogan">House Rental Center</h1>
        <h1><u>Homes</u></h1>
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
          <div>
            <SpotMap />
          </div>
        </div>
      </div>
    );
  }

}

export default SpotIndex;
