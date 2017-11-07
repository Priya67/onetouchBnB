import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import SpotDetail from './spot_detail';
import SpotMap from '../SpotMap/spot_map';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import { BookingFormContainer } from './booking_form_container';

const SpotShow = ({ spot, user, spotId, fetchSpot, fetchUser,
                    currentUser, createBooking }) => {
  const spots = {
    [spotId]: spot
  };

  return (
    <div>
      <div className="single_spot_show">
        <Link to="/"><h3>Back to homes</h3></Link>
        <br />
        <div className="spot-show">
          <SpotDetail spot={spot}
            user={user}
            currentUser={currentUser}
            spotId={spotId}
            fetchSpot={fetchSpot}
            fetchUser={fetchUser}
            createBooking={createBooking}
            />
          < br/>

          <Link to={`/spots/${spotId}/review`}
            >Write Review</Link>
          <br />
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
    </div>
  );
};

export default SpotShow;
