import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | React Contact Form</title>
      </Helmet>
      <div className='column has-text-centered'>
        <h1 className='title is-1'>Lost in space?</h1>
        <Link to='/' className='button is-info is-light'>
          Go to home
        </Link>
      </div>
    </>
  );
};

export default memo(PageNotFound);
