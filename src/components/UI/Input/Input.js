import React from 'react';

import style from './Input.module.css';

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={style.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={style.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={style.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={style.Input}>
      <label className={style.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
