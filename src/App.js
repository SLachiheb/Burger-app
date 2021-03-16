import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" components={Checkout} />
          <Route path="/" exact components={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
