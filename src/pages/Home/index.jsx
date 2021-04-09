import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/ContactForm';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | React Contact Form</title>
      </Helmet>
      <div className='column is-10-mobile is-6-tablet is-6-desktop is-6-widescreen is-6-fullhd'>
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
