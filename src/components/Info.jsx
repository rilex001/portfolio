import React from 'react'
import image1 from '../img/slika.jpg'
import twicon from '../img/icon_tw.svg'
import ghicon from '../img/github-icon.svg'
import pdf from '../img/cv.pdf'

function Info() {
    return (
        <div id="welcome" className="grid">
            <div className="welcome-text">
                <p className="leading">My name is Nikola. I'm computer science student and web developer focused on crafting clean & user-friendly experiences</p>
                <a className="button" href={pdf} target='_blank' rel='noopener noreferrer'>Download CV</a>
                <div className="mediacontainer">
                    <div className='media'><a href="https://github.com/rilex001" target='_blank' rel='noopener noreferrer'><img src={ghicon} alt="facebook" className='iconimg'/></a></div>
                    <div className='media'><a href="https://twitter.com/Nikola06213931" target='_blank' rel='noopener noreferrer'><img src={twicon} alt="twitter" className='iconimg'/></a></div>
                </div>
            </div>
            <div className="welcome-img">
                <img 
                    src={image1} 
                    alt="profile"
                    className='profileimage'
                />
            </div>
        </div>
    )
}

export default Info
