import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotMap from '../SpotMap/spot_map';
import { Link } from 'react-router-dom';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(this.props.currentUser != null) {
      this.props.fetchBookings(this.props.currentUser.id);
    }
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
        <footer>
          <div id = "partition"></div>
          <div id = "foot">
            <div id = "foot_name" height="30">
              <p>Developed by <b>Priya Mangal</b></p>
            </div>
            <div id = "foot_links">
              <a target="_blank" href="https://www.linkedin.com/in/priyamangal">
                <img src="li.png" alt="li" height="30" width="30"/>
              </a>
              <a target="_blank" href="https://github.com/Priya67">
                <img src="github.png" alt="github" height="30" width="30"/>
              </a>
            </div>
          </div>
        </footer>

      </div>
    );
  }

}

export default SpotIndex;
