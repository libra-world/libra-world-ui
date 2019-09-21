import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorPage from '@src/components/ErrorPage';

export default
@withRouter
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidMount() {
    const { history } = this.props;
    this.unlisten = history.listen(() => {
      this.setState({
        hasError: false,
      });
    });
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error, errorInfo) {
    // push error to server side
  }

  componentWillUnmount() {
    this.unlisten();
  }

  onReload = () => {
    const { history } = this.props;
    history.go(0);
  };

  render() {
    if (this.state.hasError) {
      return <ErrorPage onReload={this.onReload} />;
    }
    return this.props.children;
  }
}
