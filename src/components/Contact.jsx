import React from 'react'

function Contact() {
    return (
        <div  id='contact'>
            <h3>Get In Touch</h3>
            <p class="projectinfo">Lorem ipsum dolor sit amet, consectetur.</p>
            <form name='contact' action="POST" data-netlify="true">
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='EMAIL' />
                <textarea name='message' placeholder='YOUR MESSAGE'></textarea>
                <div data-netlify-recaptcha='true'></div>
                <button class="button" type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact
