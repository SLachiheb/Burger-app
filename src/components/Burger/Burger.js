import React from 'react';

import style from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {
  const transformIngredients = Object.keys(props.ingredients).map(keyIng => {
    return [...Array(props.ingredients[keyIng])].map((_, i) => {
      return <BurgerIngredient key={keyIng + i} type={keyIng} />;
    });
  });

  console.log(transformIngredients);
  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
