import React from 'react'
import projectimage from '../img/img2.JPG'
import Project from './Project'
function Projects() {
    return (
        <div id='portfolio' className='projectcontainer'>
            <h2 className='center'>Portfolio</h2>

            <Project 
                name ='Project Name' 
                info ='A platform for automating data collection and reporting throughout teams, operations and supply chains.'
                picture = {projectimage}
            />

            <Project 
                name ='Novi projekat' 
                info ='Proba 123'
                picture = {projectimage}
            />

            

            
        </div>
    )
}

export default Projects
