import React from 'react'
import emailjs from 'emailjs-com';


function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_err36mn', e.target, 'user_MQUcyCV08352a6xbPY7Mh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <div  id='contact'>
          <h3>Get In Touch</h3>
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <input type="text" name="from_name" placeholder='NAME' />
            <input type="email" name="user_email" placeholder='EMAIL' />
            <textarea name="message" placeholder='YOUR MESSAGE' />
            <button type="submit" className='button' value="Send">Send</button>
        </form>
        </div>
    )
}

export default Contact
