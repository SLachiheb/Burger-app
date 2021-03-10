import React from 'react';

import style from './Burger.module.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {
  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
