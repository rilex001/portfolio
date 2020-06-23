import React from 'react'

function Contact() {
    return (
        <div  id='contact'>
            <h3>Get In Touch</h3>
            <p class="projectinfo">Lorem ipsum dolor sit amet, consectetur.</p>
            <form>
                <input type="text" placeholder='NAME' />
                <input type="email" placeholder='EMAIL' />
                <textarea placeholder='YOUR MESSAGE'></textarea>
                <button class="button">Send</button>
            </form>
        </div>
    )
}

export default Contact
