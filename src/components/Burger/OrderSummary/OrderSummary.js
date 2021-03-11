import React from 'react';

import Aux from './../../../hoc/Aux/Aux';
import Button from './../../UI/Button/Button';

class OrderSummary extends React.Component {
  render() {
    const ingredients = Object.keys(this.props.ingredients).map(ing => {
      return (
        <li key={ing}>
          <span style={{ textTransform: 'capitalize' }}>{ing}</span>:{' '}
          {this.props.ingredients[ing]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredients}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout ?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
