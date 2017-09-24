import React from 'react';
import { Link } from 'react-router';

const SpotDetail = ({ spot }) => {
  return (
    <div>
      <ul className="spot_list">
        <img className="index-image" src={spot.img_url} />
        <li><h2>{spot.heading}</h2></li>
        <li>{spot.user_id}</li>
        <br />
        <li>{spot.room_type}</li>
        <li>{spot.rating}</li>
        <br/>
        <li><b>{spot.price}$  </b></li>
        <li ><img id="bed" src="http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506245769/spots/bed.png"/>  {spot.number_of_beds}</li>
        <li></li>
        <br />
        <li>{spot.description}</li>
        <br />
        <li><b>House Rules: </b>{spot.house_rules}</li>
        <li><b>Cancellation police: </b>{spot.cancellations}</li>

      </ul>
    </div>
  );
};

export default SpotDetail;
