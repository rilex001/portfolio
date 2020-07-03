import React from 'react'

function Contact() {
    return (
        <div  id='contact'>
            <h3>Get In Touch</h3>
            <p class="projectinfo">Lorem ipsum dolor sit amet, consectetur.</p>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="contact" />
  </form>
        </div>
    )
}

export default Contact
