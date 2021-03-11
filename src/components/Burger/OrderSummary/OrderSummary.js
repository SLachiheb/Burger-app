import React from 'react';

import Aux from './../../../hoc/Aux';
import Button from './../../UI/Button/Button';

const orderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(ing => {
    return (
      <li key={ing}>
        <span style={{ textTransform: 'capitalize' }}>{ing}</span>:{' '}
        {props.ingredients[ing]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
