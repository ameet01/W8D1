import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './search_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>


      <Route exact path="/" component={ SearchContainer } />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  )
}

export default App;


//AIzaSyCl8S69MKADMp4szxrY_MT-4z9HFydQpPI
