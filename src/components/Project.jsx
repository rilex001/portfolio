import React from 'react'


function Project({name, info, picture}) {
    return (
        <>
            <h3 className='center'>{name}</h3>
            <img className='projectimage' src={picture} alt='video' />
            <p className='projectinfo'>{info}</p>
            <div className='buttoncontainer center'>
            <a className='button'>Visit site</a>
            <a className='button'>View code</a>
            </div>
        </>
    )
}

export default Project
