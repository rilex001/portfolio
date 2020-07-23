import React from 'react'
import twicon from '../img/icon_tw.svg'
import ghicon from '../img/github-icon.svg'

function Footer() {
    return (
        <footer>
            <div className="grid">
                <p className="copyright">Copyright 2020 Nikola Ristic &copy; </p>
                <ul className="social">
                    <li><a href="https://github.com/rilex001" target='blank'><img src={ghicon} alt="facebook" /></a></li>
                    <li><a href="https://twitter.com/Nikola06213931" target='blank'><img src={twicon} alt="twitter" /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
