import React from 'react';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

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
