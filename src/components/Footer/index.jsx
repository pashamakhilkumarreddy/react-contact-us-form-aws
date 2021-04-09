import { memo } from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p className='title is-4'>&copy; 2021 React AWS Email Form</p>
      </div>
    </footer>
  );
};

export default memo(Footer);
