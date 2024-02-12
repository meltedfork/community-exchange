import React, { useState } from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import TextField from './TextField';
import { Box, Button, Container } from '@mui/material';
import { Padding } from '@mui/icons-material';

const postUrl = `https://art.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

const CustomForm = ({ status, message, onValidated }: { status: string | null, message: string | TrustedHTML, onValidated: Function }) => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  }

  return (
    <Container style={{ paddingTop: "100px" }}>
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">
          {status === "success"
            ? "Success!"
            : "Join our email list for future updates."
          }
        </h3>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status !== "success" ? (
          <div className="mc__field-container">
            <TextField
              label="First Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(event.target.value);
              }}
              type="text"
              value={firstName}
              required
            />

            <TextField
              label="Last Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLastName(event.target.value);
              }}
              type="text"
              value={lastName}
              required
            />

            <TextField
              label="Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
              type="email"
              value={email}
              required
            />
          </div>
        ) : null}

        {
          status === 'success' ? <button
            // onClick={() => setModalOpen(false)}
            className="g__justify-self-center">Close</button> :
            <input
              className='primaryBtn primaryBtn--big g__justify-self-center'
              type='submit'
            // value={props.label}
            // disabled={validateInput(props.formValues)}
            />
        }
      </form>
    </Container>
  );
};

function MailChimpForm() {
  return (

    <div className="mc__form-container">
      <MailchimpSubscribe url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData: EmailFormFields) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default MailChimpForm;
