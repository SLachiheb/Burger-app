import React from 'react';

import style from './Order.module..css';

const order = props => (
  <div className={style.Order}>
    <p>Ingredients: Salade(1)</p>
    <p>
      Price: <strong>USD 5.45</strong>
    </p>
  </div>
);

export default order;
