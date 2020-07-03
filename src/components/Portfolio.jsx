import React from 'react'
import Project from './Project'
import country from '../img/countr.png'
import weather from '../img/weather.png'
import cosmo from '../img/cosmo.png'
import bordino from '../img/bordino.png'
import todo from '../img/todo.png'
function Projects() {
    return (
        <div id='portfolio' className='projectcontainer'>
            <h2 className='center'>Portfolio</h2>

            <Project 
                name ='Country' 
                info ='A platform for automating data collection and reporting throughout teams, operations and supply chains.'
                picture = {country}
                sitelink = 'https://elastic-mcnulty-6eb072.netlify.app/'
                codelink = 'https://github.com/rilex001/countries'
            />

            <Project 
                name ='Weather app' 
                info ='Proba 123'
                picture = {weather}
                sitelink = 'https://thirsty-hamilton-e8bb3c.netlify.app/'
                codelink = 'https://github.com/rilex001/weatherproject'
            />

            <Project 
                name ='Cosmo Junkie' 
                info ='Mobile first responsive website'
                picture = {cosmo}
                sitelink = 'https://mystifying-lamarr-868bb6.netlify.app/'
                codelink = 'https://github.com/rilex001/Mobile-First-Responsive'
            />

            <Project 
                name ='Bordino' 
                info ='Application for Raf challenge 2020'
                picture = {bordino}
                sitelink = ''
                codelink = 'https://github.com/rilex001/Raf-challenge2020'
            />

            <Project 
                name ='Todo app' 
                info ='React todo app'
                picture = {todo}
                sitelink = ''
                codelink = 'https://github.com/rilex001/todoapp'
            />


            

            
        </div>
    )
}

export default Projects
