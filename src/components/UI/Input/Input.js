import React from 'react';

import style from './Input.module.css';

const input = props => {
  let inputElement = null;
  const inputClasses = [style.InputElement];
  let validationError = null;

  if (props.invalid && props.touched) {
    validationError = <p>Please enter a valid value!</p>;
  }

  //   console.log(props.invalid, props.shouldValidate, props.touched);

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(style.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={style.Input}>
      <label className={style.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};
export default input;
