import React from 'react';

import style from './DrawerToggle.module.css';

const drawerToggle = props => (
  <div className={style.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
