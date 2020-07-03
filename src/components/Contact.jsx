import React from 'react'
import NetlifyForm from 'react-netlify-form'

function Contact() {
    return (
        <div  id='contact'>
            <h3>Get In Touch</h3>
            <NetlifyForm
  name='Form With Recaptcha'
  recaptcha={{
    sitekey: 'my_recaptcha_site_key',
    size: 'normal'
  }}
>
  {({ loading, error, recaptchaError, success, recaptcha }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {recaptchaError &&
        <div>Recaptcha did not match. Please make sure the box is checked.</div>
      }
      {success &&
        <div>Thank you for contacting us!</div>
      }
      {!loading && !success &&
        <div>
          <input type='text' name='Name' required />
          <textarea name='Message' required />
          {recaptcha}
          <button>Submit</button>
        </div>
      }
    </div>
  )}
</NetlifyForm>
        </div>
    )
}

export default Contact
