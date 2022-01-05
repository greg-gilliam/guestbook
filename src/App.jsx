import React from 'react';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProvideAuth from './context/ProvideAuth';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import Login from './views/Authentication/Login';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoutes exact path="/">
              <Home />
            </PrivateRoutes>
          </Switch>
        </Layout>
      </Router>
    </ProvideAuth>
  );
}

export default App;
