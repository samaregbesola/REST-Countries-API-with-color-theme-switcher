import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import Details from './pages/CountryDetails';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <main className="min-h-screen dark:bg-veryDarkBlueBg dark:text-white  bg-veryLightGray text-veryDarkBlueText font-nunito text-sm">
              <Home />
            </main>
          </Route>
          <Route path="/details/:name">
            <Details />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
