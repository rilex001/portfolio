import React from 'react'
import twicon from '../img/icon_tw.svg'
import ghicon from '../img/github-icon.svg'

function Footer() {
    return (
        <footer>
            <div className="grid">
                <p className="copyright">Copyright 2020 Nikola Ristic</p>
                <ul className="social">
                    <li><a href="#"><img src={ghicon} alt="facebook" /></a></li>
                    <li><a href="#"><img src={twicon} alt="twitter" /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
