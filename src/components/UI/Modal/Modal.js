import React from 'react';

import style from './Modal.module.css';
import Aux from './../../../hoc/Aux/Aux';
import Backdrop from './../Backdrop/Backdrop';

class Modal extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.show !== this.props.show || nextProps.children !== this.props.children) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={style.Modal}
          style={{
            transform: this.props.show ? 'translate(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
