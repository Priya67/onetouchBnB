import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 10
};

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.makeMap();
  }


  makeMap() {
    const map = new google.maps.Map(this.mapNode, mapOptions);
  }


  render() {
    return (
         <div id="map" ref={ map => this.mapNode = map }>
         </div>
    );
  }
}

export default withRouter(SpotMap);
// const getCoordsObj = latlng => ({
//   lat: latlng.lat(),
//   lng: latlng.lng()
// });

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

// registerListeners() {
//   google.maps.event.addListener(this.map, 'idle', () => {
//     const { north, south, east, west } = this.map.getBounds().toJSON();
//     const bounds = {
//       northEast: { lat:north, lng: east },
//       southWest: { lat: south, lng: west } };
//       this.props.updateFilter('bounds', bounds);
//     });
//     google.maps.event.addListener(this.map, 'click', (event) => {
//       const coords = getCoordsObj(event.latLng);
//       this.handleClick(coords);
//     });
//   }
//
//   handleMarkerClick(spot) {
//     this.props.history.push(`spot/${spot.id}`);
//   }
//
//   handleClick(coords) {
//     this.props.history.push({
//       pathname: 'spots/new',
//       search: `lat=${coords.lat}&lng=${coords.lng}`
//     });
//   }
