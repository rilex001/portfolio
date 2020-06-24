import React from 'react'
import image1 from '../img/slika.jpg'
import twicon from '../img/icon_tw.svg'
import ghicon from '../img/github-icon.svg'

function Info() {
    return (
        <div id="welcome" className="grid">
            <div className="welcome-text">
                <h2>Front - end developer</h2>
                <p className="leading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo consequat.</p>
                <button className="button">Download CV</button>
                <div className="mediacontainer">
                    <div className='media'><a href="#"><img src={ghicon} alt="facebook" className='iconimg'/></a></div>
                    <div className='media'><a href="#"><img src={twicon} alt="twitter" className='iconimg'/></a></div>
                </div>
            </div>
            <div className="welcome-img">
                <img 
                    src={image1} 
                    alt="pic of planet"
                    className='profileimage'
                />
            </div>
        </div>
    )
}

export default Info
