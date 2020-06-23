import React from 'react'
import projectimage from '../img/img2.JPG'
function Projects() {
    return (
        <div id='portfolio' className='projectcontainer'>
            <h2 className='center'>Portfolio</h2>

            <h3 className='center'>Project Name</h3>
            <img className='projectimage' src={projectimage} alt='video' />
            <p className='projectinfo'>A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>
            <div className='buttoncontainer center'>
            <a className='button'>Visit site</a>
            <a className='button'>View code</a>
            </div>

            <h3 className='center'>Project Name</h3>
            <img className='projectimage' src={projectimage} alt='video' />
            <p className='projectinfo'>A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>
            <div className='buttoncontainer center'>
            <a className='button'>Visit site</a>
            <a className='button'>View code</a>
            </div>

            <h3 className='center'>Project Name</h3>
            <img className='projectimage' src={projectimage} alt='video' />
            <p className='projectinfo'>A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>
            <div className='buttoncontainer center'>
            <a className='button'>Visit site</a>
            <a className='button'>View code</a>
            </div>

            
        </div>
    )
}

export default Projects
