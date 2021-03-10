import React from 'react';

import style from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients).flatMap(keyIng => {
    return [...Array(props.ingredients[keyIng])].map((_, i) => {
      return <BurgerIngredient key={keyIng + i} type={keyIng} />;
    });
  });

  console.log('resultat : ', transformIngredients);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
