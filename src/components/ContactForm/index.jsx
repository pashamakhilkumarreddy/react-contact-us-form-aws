import { useState } from 'react';
import fetch from 'node-fetch';
import config from '../../config';
import clsx from 'clsx';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    type: '',
    message: '',
  });

  const handleOnChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      if (isValidFormData()) {
        const { name, email, message } = formData;
        const body = JSON.stringify({
          email,
          name,
          message,
        });
        const options = {
          method: 'POST',
          body,
        };
        const response = await fetch(config.ENDPOINT, options);
        const result = await response.json();
        if (result && result.MessageId) {
          setResponseMessage({
            type: 'success',
            message: 'Successfully sent the mail',
          });
          setFormData({
            ...initialFormData,
          });
        }
        console.info(result);
      }
    } catch (err) {
      console.error(err);
      setResponseMessage({
        type: 'success',
        message: 'Unable to send the mail',
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setResponseMessage('');
      }, 6000);
    }
  };

  const resetForm = (e) => {
    try {
      e.preventDefault();
      setFormData({
        ...initialFormData,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const notificationType = () => {
    let type = '';
    switch (responseMessage.type) {
      case 'success':
        type = 'is-success';
        break;
      case 'error':
        type = 'is-danger';
        break;
      default:
        type = '';
        break;
    }
    return type;
  };

  const isValidFormData = () => Object.values(formData).every((val) => val);

  const { name, email, message } = formData;

  return (
    <form className='form box'>
      <h3 className='title is-2 has-text-centered'>Contact Us</h3>
      <div className='field'>
        <label htmlFor='name' className='label'>
          Name
        </label>
        <div className='control'>
          <input
            type='text'
            id='name'
            className='input'
            name='name'
            value={name}
            placeholder='Please enter a name'
            onChange={handleOnChange}
            required
          />
        </div>
      </div>
      <div className='field'>
        <label htmlFor='email' className='label'>
          Email
        </label>
        <div className='control'>
          <input
            type='email'
            id='email'
            className='input'
            name='email'
            value={email}
            placeholder='Please enter an email'
            onChange={handleOnChange}
            required
          />
        </div>
      </div>
      <div className='field'>
        <label htmlFor='message' className='label'>
          Message
        </label>
        <div className='control'>
          <textarea
            id='message'
            className='input'
            name='message'
            value={message}
            placeholder='Please enter a message'
            onChange={handleOnChange}
            required
          />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button
            className={clsx('button', 'is-link', isLoading ? 'is-loading' : '')}
            onClick={handleOnSubmit}>
            Submit
          </button>
        </div>
        <div className='control'>
          <button className='button is-danger is-light' onClick={resetForm}>Reset</button>
        </div>
      </div>
      {responseMessage && responseMessage.type && responseMessage.message ? (
        <div className={clsx('notification', notificationType())}>
          <button
            className='delete'
            onClick={() =>
              setResponseMessage({
                type: '',
                message: '',
              })
            }></button>
          {responseMessage.message}
        </div>
      ) : null}
    </form>
  );
};

export default ContactForm;
