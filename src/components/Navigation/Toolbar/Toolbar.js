import React from 'react';

import style from './Toolbar.module.css';
import Logo from './../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
  <header className={style.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
