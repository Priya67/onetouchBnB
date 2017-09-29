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
    super(props);
    // this.initAutocomplete = this.initAutocomplete.bind(this);
  }
  // componentDidMount() {
  //   this.makeMap();
  // }
  //
  //
  // makeMap() {
  //   const map = new google.maps.Map(this.mapNode, mapOptions);
  //   // google.maps.event.trigger(map, "resize");
  //   this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
  //   if(this.props.singleSpot) {
  //     this.props.fetchSpot(this.props.spotId);
  //   } else {
  //     this.registerListeners();
  //     this.MarkerManager.updateMarkers(this.props.spots);
  //   }
  // }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    if ( this.props.location.state )
    {
      this.map.fitBounds(this.props.location.state);
    }
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleSpot) {
      this.props.fetchSpot(this.props.spotId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.spots);
    }
  }

  componentWillUnmount(){
    delete this.map;
  }

  registerListeners() {
    // this.initAutocomplete();
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
