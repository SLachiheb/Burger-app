import React from 'react';

import Order from './../../components/Order/Order';
import axios from './../../axios-orders';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const orders = await axios.get('/orders.json');
      const fetcheOrders = [];
      for (let key in orders.data) {
        fetcheOrders.push({ ...orders.data[key], id: key });
      }
      this.setState({ loading: false, orders: fetcheOrders });
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
