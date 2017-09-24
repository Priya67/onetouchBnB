// import React from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';
//
// import MarkerManager from '../../util/marker_manager';
//
// const getCoordsObj = latlng => ({
//   lat: latlng.lat(),
//   lng: latlng.lng()
// });
//
// const mapOptions = {
//   center: {
//     lat: 37.773972,
//     lng: -122.431297
//   },
//   zoom: 123
// };
//
// class SpotMap extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     const map = this.refs.map;
//     this.map = new google.maps.Map(map, mapOptions);
//     this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
//     if(this.props.singleSpot) {
//       this.props.fetchSpot(this.props.spotId);
//     } else {
//       this.registerListeners();
//       this.MarkerManager.updateMarkers(this.props.spots);
//     }
//   }
//
//   render() {
//     return (
//       <div id="map-container" ref="map">
//
//       </div>
//     );
//   }
// }
//
// export default SpotMap;
