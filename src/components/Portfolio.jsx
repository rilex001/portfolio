import React from 'react'
import Project from './Project'
import country from '../img/countr.png'
import weather from '../img/weather.png'
import cosmo from '../img/cosmo.png'
import bordino from '../img/bordino.png'
import todo from '../img/reactnative.png'
import search from '../img/search.png'
import jobpicture from '../img/jobs.png'
import books from '../img/booksproject.png'

function Projects() {
    const countrystack  = ['React', 'Html', 'Css', 'React Router']
    const weatherstack = ['React', 'Html', 'Css']
    const cosmostack = ['Html', 'Css']
    const bordinostack = ['Html', 'Css', 'Javascript', 'Firebase']
    const todostack = ['ReactNative']
    const newsstack = ['React', 'Html', 'CSS']
    const jobs = ['React', 'React-Boostrap']
    const booksproject = ['React', 'Node', 'PostgreSQL']
    return (
        <div id='portfolio' className='projectcontainer'>
            <h2 className='center'>Portfolio</h2>

            <Project 
                name ='Country' 
                info ='REST Countries API with color theme switcher frontend mentor challenge. Users can see all countries from the API on the homepage, search for a country using input field, filter countries by region, click on a country to see more detailed information on a separate page, toggle the color scheme bewtween light and dark mode '
                picture = {country}
                sitelink = 'https://elastic-mcnulty-6eb072.netlify.app/'
                codelink = 'https://github.com/rilex001/countries'
                stack = {countrystack}
                
            />

            <Project 
                name ='Book Project' 
                info ='PERN stack CRUD application with authentication and authorization '
                picture = {books}
                sitelink = ''
                codelink = 'https://github.com/rilex001/PERN-TODO/tree/master/Books/auth'
                stack = {booksproject}
                
            />  

            <Project 
                name ='Weather app' 
                info ='A simple React weather app that displays weather information. Api what i use for application is: https://www.accuweather.com/'
                picture = {weather}
                sitelink = 'https://thirsty-hamilton-e8bb3c.netlify.app/'
                codelink = 'https://github.com/rilex001/weatherproject'
                stack = {weatherstack}
            />

            <Project 
                name ='Cosmo Junkie' 
                info ='Mobile first responsive website where i practice responsive desing, flexbox and grid'
                picture = {cosmo}
                sitelink = 'https://mystifying-lamarr-868bb6.netlify.app/'
                codelink = 'https://github.com/rilex001/Mobile-First-Responsive'
                stack = {cosmostack}
            />

            <Project 
                name ='Bordino' 
                info ='Application for Raf challenge 2020. Theme for competition is application in board game. Application have user login and user can create event and public public board game event'
                picture = {bordino}
                sitelink = ''
                codelink = 'https://github.com/rilex001/Raf-challenge2020'
                stack = {bordinostack}
            />

            <Project 
                name= 'Search news'
                info='Application for search top view news in the world'
                picture = {search}
                sitelink = ''
                codelink = 'https://github.com/rilex001/newsapi'
                stack = {newsstack}
            />

            <Project
                name= 'Jobs'
                info='Application for finding a work. Application is build only with function compoent, and use https://jobs.github.com/api api '
                picture = {jobpicture}
                sitelink = 'https://amazing-sinoussi-7b7336.netlify.app/'
                codelink = 'https://github.com/rilex001/githubjobs'
                stack = {jobs}
            />

            <Project 
                name ='Todo app' 
                info ='ReactNative todo app. User can create a news todo and delete todo '
                picture = {todo}
                sitelink = ''
                codelink = 'https://github.com/rilex001/reactnative'
                stack = {todostack}
            />


            

            
        </div>
    )
}

export default Projects
