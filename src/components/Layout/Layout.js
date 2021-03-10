import React from 'react';

import style from './Layout.module.css';

import Aux from './../../hoc/Aux';

const layout = props => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={style.Content}>{props.children}</main>
  </Aux>
);

export default layout;
