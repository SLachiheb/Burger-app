import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const errorHandler = (WrapperComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };

    componentWillMount = () => {
      this.reqInteceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInteceptor = axios.interceptors.response.use(
        req => req,
        error => {
          this.setState({ error });
        }
      );
    };

    componentWillUnount = () => {
      axios.interceptors.request.eject(this.reqInteceptor);
      axios.interceptors.response.eject(this.resInteceptor);
    };

    errorConfirmeHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmeHandler}
          >
            {this.state.error ? this.state.error.message : null} 💥
          </Modal>
          <WrapperComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default errorHandler;
