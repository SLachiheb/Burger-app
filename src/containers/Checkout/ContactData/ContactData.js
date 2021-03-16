import React from 'react';

import axios from './../../../axios-orders';
import Spinner from './../../../components/UI/Spinner/Spinner';
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
    loading: false,
  };

  orderHandler = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Sarah Lachiheb',
        adress: {
          street: 'street 1',
          zipCode: '1111',
          country: 'France',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    try {
      await axios.post('/orders.json', order);
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false });
    this.props.history.push('/');
  };

  render() {
    let form = (
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
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={style.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
