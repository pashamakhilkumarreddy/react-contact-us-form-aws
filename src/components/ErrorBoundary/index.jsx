import { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error | React Contact Form</title>
      </Helmet>
      <div className='column is-12 has-text-centered'>
        <h1 className='title is-1 is-danger'>It could be us!</h1>
      </div>
    </>
  );
};

export default ErrorBoundary;
