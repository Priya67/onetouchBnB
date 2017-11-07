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
              fetchSpots={this.props.fetchSpots}
            />
          </div>
        </div>
        <footer>
          <div id = "partition"></div>
          <div id = "foot">
            <div id = "foot_name" height="30">
              <p>Developed by <b>Priya Mangal</b></p>
            </div>
            <div id = "foot_links">
              <Link to="https://www.linkedin.com/in/priyamangal">
                <img src="li.png" alt="li" height="30" width="30"/>
              </Link>
              <Link to="https://github.com/Priya67">
                <img src="github.png" alt="github" height="30" width="30"/>
              </Link>
            </div>
          </div>
        </footer>

      </div>
    );
  }

}

export default SpotIndex;
