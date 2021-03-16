import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavigationItem.module.css';

const navigationItem = props => (
  <li className={style.NavigationItem}>
    <NavLink to={props.link} activeClassName={style.active} exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
