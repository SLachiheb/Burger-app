import React from 'react';

import axios from './../../../axios-orders';
import Spinner from './../../../components/UI/Spinner/Spinner';
import style from './ContactData.module.css';
import Button from './../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', disableValue: 'Fastest' },
            { value: 'cheapest', disableValue: 'cheapest' },
          ],
        },
        value: '',
      },
    },
    loading: false,
  };

  orderHandler = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        <Input elementType="..." elementConfig="..." value="..." />
        <Input
          inputtype="input"
          type="text"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
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
