import React from 'react'

function Contact() {
    return (
        <div  id='contact'>
          <h3>Get In Touch</h3>
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder='NAME' />
            <input type="email" name="email" placeholder='EMAIL' />
            <textarea name="message" placeholder='YOUR MESSAGE' />
            <button type="submit" className='button'>Send</button>
        </form>
        </div>
    )
}

export default Contact
