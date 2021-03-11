import React from 'react';

import style from './Toolbar.module.css';
import Logo from './../../UI/Logo/Logo';

const toolbar = props => (
  <header className={style.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
