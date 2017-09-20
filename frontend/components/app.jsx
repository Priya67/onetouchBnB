import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link } from 'react-router-dom';
import { Route, HashRouter } from 'react-router-dom';


// import { AuthRoute, ProtectedRoute } from '../util/route_uil';

const App = () => (
  <div>
    <header>
       <Link to="/" className="header-link">
         <h1>OneTouch BnB</h1>
        </Link>
      <GreetingContainer />
    </header>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
