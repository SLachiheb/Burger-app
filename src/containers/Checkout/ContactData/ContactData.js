import React from 'react';

import style from './ContactData.module.css';
import Button from './../../../components/UI/Button/Button';

class ContactData extends React.Component {
  state = {
    name: ' ',
    email: '',
    adress: {
      street: '',
      postalCode: '',
    },
  };

  render() {
    return (
      <div className={style.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className={style.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={style.Input}
            type="text"
            name="email"
            placeholder="Your Mail"
          />
          <input
            className={style.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={style.Input}
            stype="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
