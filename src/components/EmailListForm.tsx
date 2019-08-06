import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';
import './About.css';

const EmailListForm: React.FunctionComponent<{}> = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        alert(data.result);
      })
      .catch((error: Error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default EmailListForm;