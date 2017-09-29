import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 10,

  styles: [
    { featureType: "water", stylers: [{hue: "#A4DDF5"}]}
  ],
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

class SpotMap extends React.Component {
  constructor(props){
    let flag = 0;
    super(props);
    console.log("spot_map_Constructor: ", this.props.spots);
  }

  componentWillMount() {
    console.log("spot_map_WillMount: ", this.props.spots);
    // this.props.fetchSpots();
    console.log("spot_map_WillMount2: ", this.props.spots);
  }


  componentDidMount() {
    console.log("spot_map_DidMount: ", this.props.spots);
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleSpot) {
      this.props.fetchSpot(this.props.spotId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.spots);
      console.log("spot_map_DidMount2: ", this.props.spots);
    }
  }

  componentDidUpdate() {
    console.log("Update marker");
    if (this.props.singleSpot) {
      const targetSpotKey = Object.keys(this.props.spots)[0];
      const targetSpot = this.props.spots[targetSpotKey];
      this.MarkerManager.updateMarkers([targetSpot]);
    } else {
      this.MarkerManager.updateMarkers(this.props.spots);
    }
  }


  componentWillUnmount(){
    delete this.map;
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
        this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }


    handleMarkerClick(spot) {
      this.props.history.push(`/spots/${spot.id}`);
    }

    handleClick(coords) {
      this.props.history.push({
        pathname: '/',
        search: `lat=${coords.lat}&lng=${coords.lng}`
      });
    }

  render() {
    return (
         <div id="map" ref={ map => this.mapNode = map }>
         </div>
    );
  }
}

export default withRouter(SpotMap);

// componentWillMount() {
//   const map = new google.maps.Map(document.getElementsByClassName('map'), mapOptions);
  // const map = this.refs.map;
  // this.map = new google.maps.Map(map, mapOptions);
  // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
  // if(this.props.singleSpot) {
  //   this.props.fetchSpot(this.props.spotId);
  // } else {
  //   this.registerListeners();
  //   this.MarkerManager.updateMarkers(this.props.spots);
  // }
// }
