import React from 'react';

import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  checkoutContinuedHandler = () => {
    this.props.history.goBack();
  };

  checkoutCancelledHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutContinued={this.checkoutContinuedHandler}
          onCheckoutCancelled={this.checkoutCancelledHandler}
        />
      </div>
    );
  }
}

export default Checkout;
