import React from 'react';
import SpotIndexItem from './spot_index_item';

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
      </div>
    );
  }

}

export default SpotIndex;
