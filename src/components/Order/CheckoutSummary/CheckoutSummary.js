import React from 'react';

import style from './CheckoutSummary.module.css';
import Burger from './../../Burger/Burger';
import Button from './../../UI/Button/Button';

const checkoutSummary = props => {
  return (
    <div className={style.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ with: '100%', height: '300px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
