import React from 'react'

function Contact() {
    return (
        <div  id='contact'>
            <h3>Get In Touch</h3>
            <p class="projectinfo">Lorem ipsum dolor sit amet, consectetur.</p>
            <form name='contact' netlify>
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='EMAIL' />
                <textarea placeholder='YOUR MESSAGE'></textarea>
                <button class="button" type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact
