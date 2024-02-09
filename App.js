import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Search from './components/Search';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/search" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route path="/search">
            {loggedIn ? <Search /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;