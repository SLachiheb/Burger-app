import React from 'react';

import style from './SideDrawer.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = props => {
  let attachedClass = [style.SideDrawer, style.Close];
  if (props.open) {
    attachedClass = [style.SideDrawer, style.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClass.join(' ')}>
        <div className={style.Logo}>
          {/* <Logo height="11%" /> */}
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
